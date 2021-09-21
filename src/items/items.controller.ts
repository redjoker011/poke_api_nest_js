import { Controller, Get, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { GenericResult } from 'src/poke_api/generic_result.interface';
import { PokeApiResponse } from 'src/poke_api/poke_api.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  items(
    @Query() query,
  ): Promise<Observable<AxiosResponse<PokeApiResponse<GenericResult>>>> {
    return this.itemsService.items(query);
  }
}
