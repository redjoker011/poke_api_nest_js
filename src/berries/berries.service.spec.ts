import { Test, TestingModule } from '@nestjs/testing';
import { BerriesService } from './berries.service';

describe('BerriesService', () => {
  let service: BerriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BerriesService],
    }).compile();

    service = module.get<BerriesService>(BerriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
