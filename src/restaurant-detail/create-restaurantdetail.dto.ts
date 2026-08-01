/* eslint-disable prettier/prettier */
import {
IsNotEmpty,
IsString,
} from 'class-validator';

export class CreateRestaurantDetailDto{

    @IsString()
    @IsNotEmpty()
    openingTime:string;

    @IsString()
    @IsNotEmpty()
    closingTime:string;

    @IsString()
    @IsNotEmpty()
    description:string;

}