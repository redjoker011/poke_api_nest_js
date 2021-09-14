import { Injectable } from '@nestjs/common';
import { PokeApiService } from 'src/poke_api/poke_api.service';
import { PokeApiResponse } from 'src/poke_api/poke_api.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { GenericResult } from 'src/poke_api/generic_result.interface';
import { BerryDetail } from './berry.interface';

@Injectable()
export class BerriesService {
  constructor(private pokeApiClient: PokeApiService) {}

  berries(): Promise<
    Observable<AxiosResponse<PokeApiResponse<GenericResult>>>
  > {
    return this.pokeApiClient.get('berry');
  }

  berry(
    name: string,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<BerryDetail>>>> {
    const url = `berry/${name}`;
    return this.pokeApiClient.get(url);
  }
}
