/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './create-restuant.dto';
import { Restaurant } from './restaurant.entity';
import { UseGuards } from '@nestjs/common';
import { authguard } from '../auth/auth.guard';


@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Post('create')
    @UseGuards(authguard)
    async createRestaurant(@Body() restaurantData: CreateRestaurantDto): Promise<Restaurant> {
        return this.restaurantService.createRestaurant(restaurantData);
    }

    @Get('all')
    @UseGuards(authguard)
    async getAllRestaurants(): Promise<Restaurant[]> {
        return this.restaurantService.getAllRestaurants();
    }
     @UseGuards(authguard)
    @Get(':id')
    async getRestaurantById(@Param('id') id: number): Promise<Restaurant> {

        return this.restaurantService.getRestaurantById(id);
    }

    @Put(':id')
    @UseGuards(authguard)
    async updateRestaurant(@Param('id') id: number, @Body() updatedata: Partial<Restaurant>): Promise<Restaurant> {
        const restaurant = await this.restaurantService.getRestaurantById(id);
        if (!restaurant) {
            throw new Error('Restaurant not found');
        }
        return this.restaurantService.updateRestaurant(id, updatedata);
 
    }
    @Delete(':id')
    @UseGuards(authguard)
    async deleteRestaurant(@Param('id') id: number): Promise<void> {
        return this.restaurantService.deleteRestaurant(id);
    
    }

    @Get('address/:address')
    async getRestaurantByAddress(@Param('address') address: string): Promise<Restaurant[]> {
        return this.restaurantService.getRestaurantByAddress(address);
    }
    @Patch(':id/status')
    async updateRestaurantStatus(@Param('id') id: number, @Body() updatedStatus: Partial<Restaurant>): Promise<Restaurant> {
        const restaurant = await this.restaurantService.getRestaurantById(id);
        if (!restaurant) {
            throw new Error('Restaurant not found');
        }
        return this.restaurantService.updateRestaurantStatus(id, updatedStatus);
    }

    //menu routes
    @Get(':id/menu')
    async getRestaurantMenus(@Param('id') id:number): Promise<Restaurant>{
        return this.restaurantService.getRestaurantMenus(id);

    }

    @Get('name/:name/menu')
async getRestaurantMenusByName(
  @Param('name') name: string,
): Promise<Restaurant> {
  return this.restaurantService.getRestaurantMenusByName(name);
}

//extra
      




}
