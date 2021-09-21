import { Module } from '@nestjs/common';
import { BerriesService } from './berries.service';
import { BerriesController } from './berries.controller';
import { PokeApiModule } from 'src/poke_api/poke_api.module';
import { QueryParamModule } from 'src/query_params/query_params.module';

@Module({
  imports: [PokeApiModule, QueryParamModule],
  controllers: [BerriesController],
  providers: [BerriesService],
})
export class BerriesModule {}
