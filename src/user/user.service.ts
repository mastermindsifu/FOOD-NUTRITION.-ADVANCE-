/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users=[
        {
            id:1,
            name:'John Doe',
            email:'john.doe@example.com'
        },
        {
            id:2,
            name:'Jane ',
            email:'jane@example.com'
        }
    ];
    getUsers(){
        return this.users;
    }

    getUserById(id:number){
        return this.users.find((user)=>user.id===id);
    }

}
