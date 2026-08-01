/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Menu } from './menu.enity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import { CreateMenuDto } from './create-menu.dto';

@Injectable()
export class MenuService {

    constructor(@InjectRepository(Menu) private readonly menuRepository: Repository<Menu>,
    @InjectRepository(Restaurant) private readonly restaurantRepository: Repository<Restaurant>

) {}

async createMenu(restaurantId:number, menuData:CreateMenuDto): Promise<Menu> {
    const restaurant= await this.restaurantRepository.findOneBy({id:restaurantId});
    if(!restaurant){
        throw new NotFoundException('Restaurant not found');
    }

    const menu = this.menuRepository.create({
        ...menuData,
        restaurant
    });

    return await this.menuRepository.save(menu);

}
}

