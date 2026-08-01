import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantDetailController } from './restaurant-detail.controller';

describe('RestaurantDetailController', () => {
  let controller: RestaurantDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantDetailController],
    }).compile();

    controller = module.get<RestaurantDetailController>(RestaurantDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
