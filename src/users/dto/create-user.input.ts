import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3, {
    message: 'Kullanıcı adı en az 3 karakter olmalıdır',
  })
  username: string;
  @IsEmail({}, { message: 'Geçersiz email adresi giriniz' })
  email: string;
}
