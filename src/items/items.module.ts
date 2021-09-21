import { Module } from '@nestjs/common';
import { PokeApiModule } from 'src/poke_api/poke_api.module';
import { QueryParamModule } from 'src/query_params/query_params.module';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [PokeApiModule, QueryParamModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
