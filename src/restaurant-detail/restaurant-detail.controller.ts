/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';

import { RestaurantDetailService } from './restaurant-detail.service';
import { CreateRestaurantDetailDto } from './create-restaurantdetail.dto';
import { RestaurantDetail } from './restaurant-detail.entity';
import { authguard } from 'src/auth/auth.guard';

@Controller('restaurant')
export class RestaurantDetailController {

    constructor(
        private readonly detailService: RestaurantDetailService,
    ) {}

    // Create Detail
    @Post(':id/detail')
    @UseGuards(authguard)
    async createDetail(

        @Param('id')
        id: number,

        @Body()
        dto: CreateRestaurantDetailDto,

    ): Promise<RestaurantDetail> {

        return this.detailService.createDetail(id, dto);

    }

    // Get Detail
    @Get(':id/detail')
    @UseGuards(authguard)
    async getDetail(

        @Param('id', )
        id: number,

    ): Promise<RestaurantDetail> {

        return this.detailService.getDetail(id);

    }

    // Update Detail
    @Patch(':id/detail')
    @UseGuards(authguard)
    async updateDetail(

        @Param('id')
        id: number,

        @Body()
        dto: Partial<CreateRestaurantDetailDto>,

    ): Promise<RestaurantDetail> {

        return this.detailService.updateDetail(id, dto);

    }

}