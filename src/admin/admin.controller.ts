/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';
import { CreateAdminDto } from './admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post()
    async createAdmin(@Body() adminData: CreateAdminDto): Promise<Admin> {
        return this.adminService.createAdmin(adminData);
    }

    @Get()
    async getAllAdmins(): Promise<Admin[]> {
        return this.adminService.getAll();
    }

    @Get(':id')
    async getAdminById(@Param('id') id: number): Promise<Admin> {
        return this.adminService.getById(id);
    }
}
