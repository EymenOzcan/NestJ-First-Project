import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
