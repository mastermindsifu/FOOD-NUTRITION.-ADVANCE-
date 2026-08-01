/* eslint-disable prettier/prettier */
import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './create-menu.dto';
import { Menu } from './menu.enity';
import { authguard } from 'src/auth/auth.guard';

@Controller('restaurant')
export class MenuController {
    constructor(private readonly MenuService:MenuService){}

    @UseGuards(authguard)
    @Post(':id/menu')
    
    async createMenu(@Param('id') id:number,@Body() menuData:CreateMenuDto): Promise<Menu>{
        return this.MenuService.createMenu(id,menuData)
    }
    
}
