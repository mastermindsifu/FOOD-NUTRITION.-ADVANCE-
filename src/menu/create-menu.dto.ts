/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMenuDto {

    @IsString()
    @IsNotEmpty()
    foodName:string;

    @IsNumber()
    price:number;
}