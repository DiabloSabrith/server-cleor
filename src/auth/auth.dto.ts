import { IsEmail, IsString, MinLength } from 'class-validator';
export class AuthDto {
  @IsEmail()
  email: string;

  @MinLength(2, {
    message: 'Длина email должна быть не меньше 2 символов',
  })
  @IsString()
  name: string;
  @IsString()
  password: string;
}
