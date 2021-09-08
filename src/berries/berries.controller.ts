import { Controller, Get } from '@nestjs/common';
import { BerriesService } from './berries.service';

@Controller('berries')
export class BerriesController {
  constructor(private readonly berriesService: BerriesService) {}

  @Get()
  berries(): string {
    return this.berriesService.berries();
  }
}
