import { Injectable } from '@nestjs/common';
import { PokeApiService } from 'src/poke_api/poke_api.service';
import { PokeApiResponse } from 'src/poke_api/poke_api.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class BerriesService {
  constructor(private pokeApiClient: PokeApiService) {}

  berries(): Promise<Observable<AxiosResponse<PokeApiResponse>>> {
    return this.pokeApiClient.get('berry');
  }
}
