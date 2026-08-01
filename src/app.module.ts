/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { RownerModule } from './rowner/rowner.module';
import { AdminModule } from './admin/admin.module';
import { RsModule } from './rs/rs.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { RestaurantDetailModule } from './restaurant-detail/restaurant-detail.module';
import { MailModule } from './mail/mail.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    RestaurantModule,
    RownerModule,
    AdminModule,
    RsModule,
    AuthModule,
    MenuModule,
    RestaurantDetailModule,
    MailModule,
    
  ],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}