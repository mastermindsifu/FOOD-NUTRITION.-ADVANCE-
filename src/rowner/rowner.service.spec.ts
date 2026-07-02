import { Test, TestingModule } from '@nestjs/testing';
import { RownerService } from './rowner.service';

describe('RownerService', () => {
  let service: RownerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RownerService],
    }).compile();

    service = module.get<RownerService>(RownerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
