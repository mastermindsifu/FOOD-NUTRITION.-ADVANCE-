/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Restaurant } from '../restaurant/restaurant.entity';
import { RestaurantDetail } from './restaurant-detail.entity';
import { CreateRestaurantDetailDto } from './create-restaurantdetail.dto';

@Injectable()
export class RestaurantDetailService {

    constructor(

        @InjectRepository(Restaurant)
        private readonly restaurantRepository: Repository<Restaurant>,

        @InjectRepository(RestaurantDetail)
        private readonly detailRepository: Repository<RestaurantDetail>,

    ) {}

    // Create Detail
    async createDetail(
        restaurantId: number,
        detailData: CreateRestaurantDetailDto,
    ): Promise<RestaurantDetail> {

        const restaurant = await this.restaurantRepository.findOneBy({
            id: restaurantId,
        });

        if (!restaurant) {
            throw new NotFoundException('Restaurant not found');
        }

        const detail = this.detailRepository.create({
            ...detailData,
            restaurant,
        });

        const savedDetail = await this.detailRepository.save(detail);
        return savedDetail;
    }

    // Get Detail
    async getDetail(
        restaurantId: number,
    ): Promise<RestaurantDetail> {

        const detail = await this.detailRepository.findOne({
            where: {
                restaurant: {
                    id: restaurantId,
                },
            },
            relations: {
                restaurant: true,
            },
        });

        if (!detail) {
            throw new NotFoundException('Restaurant detail not found');
        }

        return detail;
    }

    // Update Detail
    async updateDetail(
        restaurantId: number,
        updateData: Partial<CreateRestaurantDetailDto>,
    ): Promise<RestaurantDetail> {

        const detail = await this.detailRepository.findOne({
            where: {
                restaurant: {
                    id: restaurantId,
                },
            },
            relations: {
                restaurant: true,
            },
        });

        if (!detail) {
            throw new NotFoundException('Restaurant detail not found');
        }

        Object.assign(detail, updateData);

        return this.detailRepository.save(detail);
    }

}