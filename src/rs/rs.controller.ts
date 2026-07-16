/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { RsService } from './rs.service';
import { RsDto } from './rs.dto';

@Controller('rs')
export class RsController {
    constructor(private readonly rsService: RsService) {}

    @Post()
    createRs(@Body() rsDTo: RsDto) {
        return this.rsService.createRs(rsDTo);
    }

    @Get('search/:fullname')
    searchByFullname(@Param('fullname') fullname: string) {
        return this.rsService.searchByFullname(fullname);
    }
    
    @Get(':username')
    getbyusernamme(@Param('username') username: string) {
        return this.rsService.getbyusernamme(username);
    }

    @Delete(':username')
    deleteuserbyusername(@Param('username') username: string) {
        return this.rsService.deleteuserbyusername(username);
    }



}
