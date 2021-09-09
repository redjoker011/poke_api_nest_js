import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BerriesModule } from './berries/berries.module';
import { ItemsModule } from './items/items.module';
import { PokeApiModule } from './poke_api/poke_api.module';

@Module({
  imports: [BerriesModule, ItemsModule, PokeApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
