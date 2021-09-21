import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { GenericResult } from 'src/poke_api/generic_result.interface';
import {
  PokeApiQueryParam,
  PokeApiResponse,
} from 'src/poke_api/poke_api.interface';
import { PokeApiService } from 'src/poke_api/poke_api.service';
import { QueryParamService } from 'src/query_params/query_params.service';
import { ItemDetail } from './items.interface';

@Injectable()
export class ItemsService {
  constructor(
    private pokeApiClient: PokeApiService,
    private queryParamBuilder: QueryParamService,
  ) {}

  items(
    params: PokeApiQueryParam,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<GenericResult>>>> {
    const query = this.queryParamBuilder.build(params);

    if (!!query) {
      return this.pokeApiClient.get('item?' + query);
    }
    return this.pokeApiClient.get('item');
  }

  item(
    name: string,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<ItemDetail>>>> {
    const url = `item/${name}`;
    return this.pokeApiClient.get(url);
  }
}
