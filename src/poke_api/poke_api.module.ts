import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PokeApiService } from './poke_api.service';

@Module({
  imports: [HttpModule],
  providers: [PokeApiService],
  exports: [PokeApiService],
})
export class PokeApiModule {}
