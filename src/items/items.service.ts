import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { GenericResult } from 'src/poke_api/generic_result.interface';
import { PokeApiResponse } from 'src/poke_api/poke_api.interface';
import { PokeApiService } from 'src/poke_api/poke_api.service';

@Injectable()
export class ItemsService {
  constructor(private pokeApiClient: PokeApiService) {}

  items(): Promise<Observable<AxiosResponse<PokeApiResponse<GenericResult>>>> {
    return this.pokeApiClient.get('item');
  }
}
