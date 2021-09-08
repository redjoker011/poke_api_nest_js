import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BerriesModule } from './berries/berries.module';

@Module({
  imports: [BerriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
