/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rs } from './rs.entity';
import {  Like, Repository } from 'typeorm';
import { RsDto } from './rs.dto';

@Injectable()
export class RsService {
    constructor(@InjectRepository(Rs) private readonly rsRepository: Repository<Rs>) {}

    async createRs(rsDTo: RsDto): Promise<Rs> {
        const rs = this.rsRepository.create(rsDTo);
        return this.rsRepository.save(rs);
    }

    async searchByFullname(fullname:string): Promise<Rs[]> {
        return this.rsRepository.find({ where: {fullname: Like (`%${fullname}%`) } });
    }

    async getbyusernamme(username: string): Promise<Rs> {
        const rs = await this.rsRepository.findOneBy({ username });
        if (!rs) {
            throw new Error('User not found');
        }
        return rs;
    }

    async deleteuserbyusername(username: string): Promise<void> {
        const rs = await this.rsRepository.findOneBy({ username });
        if (!rs) {
            throw new Error('User not found');
        }
        await this.rsRepository.remove(rs);
    }

}

