import { IsEmail, IsNotEmpty, MinLength, IsOptional, IsString, IsInt } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password: string;

  // --- TAMBAHAN BARU 👇 ---
  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsOptional()
  @IsString()
  bio?: string;
}