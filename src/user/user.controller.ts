/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id:string){
        return this.userService.getUserById(Number(id));
    }

}
