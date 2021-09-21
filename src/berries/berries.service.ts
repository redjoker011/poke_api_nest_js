import { Injectable } from '@nestjs/common';
import { PokeApiService } from 'src/poke_api/poke_api.service';
import {
  PokeApiQueryParam,
  PokeApiResponse,
} from 'src/poke_api/poke_api.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { GenericResult } from 'src/poke_api/generic_result.interface';
import { BerryDetail } from './berry.interface';
import { QueryParamService } from 'src/query_params/query_params.service';

@Injectable()
export class BerriesService {
  constructor(
    private pokeApiClient: PokeApiService,
    private queryParamBuilder: QueryParamService,
  ) {}

  berries(
    params: PokeApiQueryParam,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<GenericResult>>>> {
    const query = this.queryParamBuilder.build(params);

    if (!!query) {
      return this.pokeApiClient.get('berry?' + query);
    }
    return this.pokeApiClient.get('berry');
  }

  berry(
    name: string,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<BerryDetail>>>> {
    const url = `berry/${name}`;
    return this.pokeApiClient.get(url);
  }
}
