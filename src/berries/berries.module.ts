import { Module } from '@nestjs/common';
import { BerriesService } from './berries.service';
import { BerriesController } from './berries.controller';

@Module({
  controllers: [BerriesController],
  providers: [BerriesService],
})
export class BerriesModule {}
