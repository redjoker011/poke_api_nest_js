import { Controller, Get, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { GenericResult } from 'src/poke_api/generic_result.interface';
import { PokeApiResponse } from 'src/poke_api/poke_api.interface';
import { BerriesService } from './berries.service';

@Controller('berries')
export class BerriesController {
  constructor(private readonly berriesService: BerriesService) {}

  @Get()
  berries(
    @Query() query,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<GenericResult>>>> {
    const nameParam = query.name;
    return this.berriesService.berries(nameParam);
  }
}
