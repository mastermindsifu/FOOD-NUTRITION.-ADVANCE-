/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RownerController } from './rowner.controller';
import { RownerService } from './rowner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RownerEntity } from './rowner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RownerEntity])],
  controllers: [RownerController],
  providers: [RownerService]
})
export class RownerModule {}
