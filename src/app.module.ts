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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}