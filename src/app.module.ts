import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BerriesModule } from './berries/berries.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [BerriesModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
