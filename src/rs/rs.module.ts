/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RsService } from './rs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rs } from './rs.entity';
import { RsController } from './rs.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Rs])],
    providers: [RsService],
    controllers: [RsController],
    exports: [RsService]
})
export class RsModule {}
