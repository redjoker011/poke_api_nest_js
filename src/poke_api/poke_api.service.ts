import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { GenericResult } from './generic_result.interface';
import { BASE_URL } from './poke_api.constants';
import { PokeApiResponse } from './poke_api.interface';

@Injectable()
export class PokeApiService {
  constructor(private httpService: HttpService) {}

  private request(resource: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${BASE_URL}/${resource}`);
  }

  async get(
    resource: string,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<GenericResult>>>> {
    try {
      const req = await this.request(resource).toPromise();
      return req.data;
    } catch (err) {
      const response = err.response;
      if (response.status == HttpStatus.NOT_FOUND) {
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
      }
    }
  }
}
