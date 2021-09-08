import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  items(): string {
    return 'Heya!, items is working in progress';
  }
}
