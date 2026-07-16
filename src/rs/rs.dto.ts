/* eslint-disable prettier/prettier */
import { IsBoolean, IsOptional, IsString, MaxLength } from "class-validator";

export class RsDto {
    @IsString()
    @MaxLength(100)
    username: string;

    @IsString() 
    @MaxLength(150)
    fullname: string;

    @IsOptional()
    @IsBoolean()
    isActive: boolean;
}