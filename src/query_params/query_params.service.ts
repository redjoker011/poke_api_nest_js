import { Injectable } from '@nestjs/common';
import { PokeApiQueryParam } from 'src/poke_api/poke_api.interface';

@Injectable()
export class QueryParamService {
  build(params: PokeApiQueryParam) {
    // Build Query Parameters
    const esc = encodeURIComponent;
    return Object.keys(params)
      .map((k) => esc(k) + '=' + esc(params[k]))
      .join('&');
  }
}
