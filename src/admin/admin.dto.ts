/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty,  IsString,  MinLength } from 'class-validator';

export class CreateAdminDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail( {}, { message: 'Invalid email address' })
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}