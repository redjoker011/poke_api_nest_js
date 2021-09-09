import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { PokeApiResponse } from 'src/poke_api/poke_api.interface';
import { BerriesService } from './berries.service';

@Controller('berries')
export class BerriesController {
  constructor(private readonly berriesService: BerriesService) {}

  @Get()
  berries(): Promise<Observable<AxiosResponse<PokeApiResponse>>> {
    return this.berriesService.berries();
  }
}
