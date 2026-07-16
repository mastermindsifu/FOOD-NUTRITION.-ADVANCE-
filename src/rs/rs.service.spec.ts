import { Test, TestingModule } from '@nestjs/testing';
import { RsService } from './rs.service';

describe('RsService', () => {
  let service: RsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RsService],
    }).compile();

    service = module.get<RsService>(RsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
