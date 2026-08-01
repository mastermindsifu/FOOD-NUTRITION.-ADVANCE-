/* eslint-disable prettier/prettier */
import {
    IsString,
    IsPhoneNumber
} from 'class-validator';


export class CreateRestaurantDto{


    @IsString()
    name:string;



    @IsString()
    address:string;



    @IsPhoneNumber('BD')
    phone:string;


}