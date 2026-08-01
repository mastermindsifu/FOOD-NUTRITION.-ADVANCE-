/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async createUser(user:UserDto ): Promise<User> {
        const hashedpassword=await bcrypt.hash(user.password, 10);
        const newUser = this.userRepository.create({
            ...user,
            password:hashedpassword,
        });
        return this.userRepository.save(newUser);
    }

    async getAllUsers(username: string) {
     return this.userRepository.findOne({
            where: { username },
        });
        
    }
}
