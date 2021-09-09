import { Module } from '@nestjs/common';
import { BerriesService } from './berries.service';
import { BerriesController } from './berries.controller';
import { PokeApiModule } from 'src/poke_api/poke_api.module';

@Module({
  imports: [PokeApiModule],
  controllers: [BerriesController],
  providers: [BerriesService],
})
export class BerriesModule {}
