/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';


@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Get()
    getAllRestaurants() {
        return this.restaurantService.getAllRestaurants();
    }

    @Get('searchbyname')
    searchRestaurantByName(@Query('name') name:string){
        return this.restaurantService.searchRestaurantByName(name);
    }

    @Get('searchbyregion')
    searchRestaurantByRegion(@Query('region') region:string){
        return this.restaurantService.searchRestaurantByRegion(region);
    }

    @Get(':id')
    getRestaurantById(@Param('id') id:string){
        return this.restaurantService.getRestaurantById(Number(id));
    }

    @Post()
    createRestaurant(@Body() body:CreateRestaurantDto){
        return this.restaurantService.createRestaurant(body);
    }

    @Put(':id')
    updateRestaurant(@Param('id') id:string, @Body() body:CreateRestaurantDto){
        return this.restaurantService.updateRestaurant(Number(id), body);
    }

    @Patch(':id')
    UpdateRestaurant(@Param('id') id:string, @Body() body:Partial<{name:string, location:string,menu:Array<{name:string, price:number}>,region:string}>){
        return this.restaurantService.patchRestaurant(Number(id), body);
    }

    @Delete(':id')
    removeRestaurant(@Param('id') id:string){
        return this.restaurantService.deleteRestaurant(Number(id));
    }
    
}
