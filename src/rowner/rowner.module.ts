import { Module } from '@nestjs/common';
import { RownerController } from './rowner.controller';
import { RownerService } from './rowner.service';

@Module({
  controllers: [RownerController],
  providers: [RownerService]
})
export class RownerModule {}
