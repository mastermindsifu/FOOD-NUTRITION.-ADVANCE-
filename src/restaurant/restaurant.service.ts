/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Injectable()
export class RestaurantService {
    private restaurants=[
        {
            id:1, 
            name:'The Gourmet Kitchen',
            location:'123 Main Street, Cityville',
            menu:[
                {name:'burger', price:12.99},
                {name:' Pizza', price:10.99},
                {name:'Tiramisu', price:6.99}
            ],
            region:'BD',},
        {
            id:2,
            name:'Sushi Delight',
            location:'456 Oak Avenue, Townsburg',
            menu:[
                {name:' Roll', price:8.99},
                {name:'Spicy Tuna Roll', price:9.99},
                {name:'Miso Soup', price:3.99}
            ],
            region:'Dhaka',}
        ];


       getAllRestaurants(){
        return this.restaurants;
       } 
       
       getRestaurantById(id:number){
       const restaurant=  this.restaurants.find(restaurant=>restaurant.id===id);
       if(!restaurant){
        throw new Error(`Restaurant with id ${id} not found`);
       }
       return restaurant;
       }

       //post 
       createRestaurant( restaurant:CreateRestaurantDto){
        const newRestaurant={
            id:this.restaurants.length+1,
            ...restaurant
        };
        this.restaurants.push(newRestaurant);
        return newRestaurant;
       }

       //put
       updateRestaurant(id:number, updateData:CreateRestaurantDto){
        const restaurantIndex=this.restaurants.findIndex(restaurant=>restaurant.id===id);
        if(restaurantIndex===-1){
            throw new Error(`Restaurant with id ${id} not found`);
        }
        this.restaurants[restaurantIndex]={id,...updateData};
        return this.restaurants[restaurantIndex];
       }

       //patch
       patchRestaurant(id:number, updateData:Partial<{name:string,location:string,menu:Array<{name:string, price:number}>,region:string}>){
        const restaurant=this.getRestaurantById(id);
        Object.assign(restaurant,updateData);
        return restaurant;
       }

         //delete
            deleteRestaurant(id:number){
                const restaurantIndex=this.restaurants.findIndex(restaurant=>restaurant.id===id);
                if(restaurantIndex===-1){
                    throw new Error(`Restaurant with id ${id} not found`);
                }
                const deletedRestaurant=this.restaurants.splice(restaurantIndex,1);
                return {message:`Restaurant with id ${id} deleted successfully`};
            }

            //Query

            searchRestaurantByName(name:string){
                const search=this.restaurants.find((restaurant)=>restaurant.name ===name);
                if(!search){
                    throw new Error(`Restaurant with name ${name} not found`);
                }
                return search;
            }

        searchRestaurantByRegion(region:string){
            const search=this.restaurants.find((restaurant)=>restaurant.region ===region);
            if(!search){
                throw new Error(`Restaurant with region ${region} not found`);
            }   
            return search;
        }    




}

