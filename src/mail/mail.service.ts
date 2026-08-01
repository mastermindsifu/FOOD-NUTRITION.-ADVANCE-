/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {

    constructor(
        private readonly mailerService: MailerService,
    ) {}

    async sendLoginMail(email: string, username: string) {

        await this.mailerService.sendMail({

            to: email,

            subject: 'Login Successful',

            html: `
                <h2>Welcome ${username}</h2>

                <p>You have successfully logged in to the Restaurant Management System.</p>

                <p>If this wasn't you, please change your password immediately.</p>
            `,
        });

    }

}