/* eslint-disable prettier/prettier */
import { IsEmail, IsString, MaxLength } from 'class-validator';
export class UserDto {
    @IsString()
    @MaxLength(100)
    username: string;
    @IsEmail()
    email:string;
    @IsString()
    password: string;
}