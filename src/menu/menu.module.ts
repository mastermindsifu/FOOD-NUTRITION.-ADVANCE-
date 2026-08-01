/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { Menu } from './menu.enity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from 'src/restaurant/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu,Restaurant])],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
