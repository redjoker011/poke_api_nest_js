import { Controller, Get, Param, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { GenericResult } from 'src/poke_api/generic_result.interface';
import { PokeApiResponse } from 'src/poke_api/poke_api.interface';
import { BerriesService } from './berries.service';
import { BerryDetail } from './berry.interface';

@Controller('berries')
export class BerriesController {
  constructor(private readonly berriesService: BerriesService) {}

  @Get()
  berries(
    @Query() query,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<GenericResult>>>> {
    return this.berriesService.berries();
  }

  @Get(':name')
  berry(
    @Param('name') name: string,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<BerryDetail>>>> {
    return this.berriesService.berry(name);
  }
}
