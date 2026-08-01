/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { jwtConstants } from './constants';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { authguard } from './auth.guard';
import { MailModule } from 'src/mail/mail.module';


@Module({
    imports: [UserModule,MailModule, JwtModule.register({ 
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1h' },
    })
    ],
    controllers: [AuthController],
    providers: [AuthService,authguard],
})
export class AuthModule {}
