/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RestaurantDetailController } from './restaurant-detail.controller';
import { RestaurantDetailService } from './restaurant-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantDetail } from './restaurant-detail.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, RestaurantDetail])],
  controllers: [RestaurantDetailController],
  providers: [RestaurantDetailService]
})
export class RestaurantDetailModule {}
