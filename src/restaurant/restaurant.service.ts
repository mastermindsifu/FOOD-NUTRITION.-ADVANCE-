/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './create-restuant.dto';
import { Restaurant } from './restaurant.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class RestaurantService {
    constructor(@InjectRepository(Restaurant) private readonly restaurantRepository: Repository<Restaurant>,
    

) {}
    
    async createRestaurant(restaurantData: CreateRestaurantDto): Promise<Restaurant> {
        return this.restaurantRepository.save(restaurantData);
    }

    async getAllRestaurants(): Promise<Restaurant[]> {
        return this.restaurantRepository.find();
    }

    async getRestaurantById(id: number): Promise<Restaurant> {
        if (!id) {
            throw new Error('Restaurant ID is required');
        }
        const restaurant = await this.restaurantRepository.findOneBy({ id });
        if (!restaurant) {
            throw new Error('Restaurant not found');
        }
        return restaurant;
    }

    async updateRestaurant(id: number, updatedata:Partial<Restaurant>): Promise<Restaurant> {

        const restaurant = await this.restaurantRepository.findOneBy({ id });

        if (!restaurant) {
            throw new Error('Restaurant not found');
        }
        const updatedRestaurant = Object.assign(restaurant, updatedata);
        return this.restaurantRepository.save(updatedRestaurant);

    }

    async deleteRestaurant(id: number): Promise<void> {
        const restaurant = await this.restaurantRepository.delete
        ({ id });   
        if (restaurant.affected === 0) {
            throw new Error('Restaurant not found');
        }
        
    }

    async getRestaurantByAddress(address: string): Promise<Restaurant[]> {
        return this.restaurantRepository.findBy({ address });
    }

    async updateRestaurantStatus(id: number, updatedStatus: Partial<Restaurant>): Promise<Restaurant> {
        const restaurant = await this.restaurantRepository.findOneBy({ id });
        if (!restaurant) {
            throw new NotFoundException('Restaurant not found');
        }
        const updatedRestaurant = Object.assign(restaurant, updatedStatus);
        return this.restaurantRepository.save(updatedRestaurant);
    }


    //for resturant with menu
    async getRestaurantMenus(id:number): Promise<Restaurant>{
        const restaurant=await this.restaurantRepository.findOne({
            where: {id},
            relations:{
                menus: true,  
            },
        })
        if(!restaurant){
            throw new NotFoundException('Restuarant not found')
        
        }
        return restaurant;
        
    }
    async getRestaurantMenusByName(name: string): Promise<Restaurant> {
  const restaurant = await this.restaurantRepository.findOne({
    where: { name },
    relations: {menus:true},
  });

  if (!restaurant) {
    throw new NotFoundException('Restaurant not found');
  }

  return restaurant;
}


    
}
