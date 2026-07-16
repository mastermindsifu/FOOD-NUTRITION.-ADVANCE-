/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Admin } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './admin.dto';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>
    ) {}

    async createAdmin(admin: CreateAdminDto): Promise<Admin> {
        //const newAdmin =this.adminRepository.create(admin);
        //return this.adminRepository.save(newAdmin);
        return this.adminRepository.save(admin);

    }

    async getAll(): Promise<Admin[]> {
        return this.adminRepository.find();
    }

    async getById(id: number): Promise<Admin> {
        const admin = await this.adminRepository.findOneBy({ id });
        if (!admin) {
            throw new Error(`Admin with ID ${id} not found`);
        }
        return admin;
    }
    
}
