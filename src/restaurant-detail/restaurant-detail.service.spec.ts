import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantDetailService } from './restaurant-detail.service';

describe('RestaurantDetailService', () => {
  let service: RestaurantDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantDetailService],
    }).compile();

    service = module.get<RestaurantDetailService>(RestaurantDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
