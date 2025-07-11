import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Users } from '@prisma/client';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, //тут мы открято гворим о том что не будт проверять время жизни токена
      secretOrKey: configService.get('JWT_SECRET') as string,
      algorithms: ['HS256'], // Это алгоритм который нужен для подписи и чтоыб его нельзя было подделать
    });
  }

  async validate({ id }: Pick<Users, 'id'>) {
    return this.prisma.users.findUnique({ where: { id } });
  }
}
