import { Test, TestingModule } from '@nestjs/testing';
import { RsController } from './rs.controller';

describe('RsController', () => {
  let controller: RsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RsController],
    }).compile();

    controller = module.get<RsController>(RsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
