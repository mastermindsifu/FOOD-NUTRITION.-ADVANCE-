import { Test, TestingModule } from '@nestjs/testing';
import { RownerController } from './rowner.controller';

describe('RownerController', () => {
  let controller: RownerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RownerController],
    }).compile();

    controller = module.get<RownerController>(RownerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
