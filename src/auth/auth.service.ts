import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './auth.dto';
import { argon2d, hash, verify } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { Users } from '@prisma/client';
import { Response } from 'express';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwt: JwtService,
  ) {}
  async login(dto: AuthDto, res: Response) {
    const user = await this.validateUser(dto);
    const tokens = await this.issueTokens(user.id);

    res.cookie('refreshToken', tokens.refreshTokens, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return {
      user: this.returnUserFields(user),
      accessToken: tokens.accessTokens,
    };
  }
  /* TODO  validate user */
  private async validateUser(dto: AuthDto) {
    const user = await this.prisma.users.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new UnauthorizedException('Пользвоатель не найден');
    const isValidPassword = await verify(user.password, dto.password);
    if (!isValidPassword)
      throw new UnauthorizedException('Не получилось авторизоваться');
    return user;
  }
  /* TODO register */
  async register(dto: AuthDto, res: Response) {
    const oldUser = await this.prisma.users.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (oldUser) throw new BadRequestException('User существует');
    const user = await this.prisma.users.create({
      data: {
        email: dto.email,
        name: dto.name,
        password: await hash(dto.password),
      },
    });
    const tokens = await this.issueTokens(user.id);
    res.cookie('refreshToken', tokens.refreshTokens, {
      httpOnly: true,
      secure: false, // использовать только по HTTPS
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
    });
    return {
      user: this.returnUserFields(user),
      accessToken: tokens.accessTokens,
    };
  }
  /* TODO  выпуск токенов на осенове id user */
  private async issueTokens(userId: string) {
    const data = { id: userId };
    const accessTokens = this.jwt.sign(data, {
      expiresIn: '15m', //надо сделать разнцые секреты тчобы не быфло токого еслисп
    });
    const refreshTokens = this.jwt.sign(data, {
      expiresIn: '7d',
    });
    return { accessTokens, refreshTokens };
  }
  private returnUserFields(user: Users) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
}
