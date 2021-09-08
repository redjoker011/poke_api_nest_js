import { Test, TestingModule } from '@nestjs/testing';
import { BerriesController } from './berries.controller';
import { BerriesService } from './berries.service';

describe('BerriesController', () => {
  let controller: BerriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BerriesController],
      providers: [BerriesService],
    }).compile();

    controller = module.get<BerriesController>(BerriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
