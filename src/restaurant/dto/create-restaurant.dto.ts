/* eslint-disable prettier/prettier */

export class CreateRestaurantDto {

name: string;

location: string;

region: string;

menu: {
    name: string;
    price: number;
}[];

}