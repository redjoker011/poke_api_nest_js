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

@Injectable()
export class BerriesService {
  constructor(private pokeApiClient: PokeApiService) {}

  berries(
    params: PokeApiQueryParam,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<GenericResult>>>> {
    // Build Query Parameters
    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map((k) => esc(k) + '=' + esc(params[k]))
      .join('&');

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
