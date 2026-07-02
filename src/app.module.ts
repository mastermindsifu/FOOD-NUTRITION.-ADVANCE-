import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { RownerModule } from './rowner/rowner.module';
@Module({
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
  imports: [UserModule, RestaurantModule, RownerModule],
})
export class AppModule {}
