import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { BASE_URL } from './poke_api.constants';

@Injectable()
export class PokeApiService {
  constructor(private httpService: HttpService) {}

  private request(resource: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${BASE_URL}/${resource}`);
  }

  async get(resource: string): Promise<Observable<AxiosResponse<any>>> {
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
