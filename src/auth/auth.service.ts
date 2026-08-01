/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './login.dto';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
    constructor( private userService: UserService, private jwtService: JwtService ,private mailService: MailService) {}

async login(dto: LoginDto) {

    const user = await this.userService.getAllUsers(dto.username);

    if (!user) {
        throw new UnauthorizedException(
            'Invalid username or password',
        );
    }

    const isMatch = await bcrypt.compare(
        dto.password,
        user.password,
    );

    if (!isMatch) {
        throw new UnauthorizedException(
            'Invalid username or password',
        );
    }

    const payload = {
        username: user.username,
        sub: user.id,
    };

    
    await this.mailService.sendLoginMail(
        user.email,
        user.username,
    );

    return {
        access_token: this.jwtService.sign(payload),
    };
}
}
