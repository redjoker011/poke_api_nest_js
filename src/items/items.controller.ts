import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  items(): string {
    return 'Heya!, items is working in progress';
  }
}
