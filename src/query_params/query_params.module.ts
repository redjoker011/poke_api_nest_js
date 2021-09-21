import { Module } from '@nestjs/common';
import { QueryParamService } from './query_params.service';

@Module({
  providers: [QueryParamService],
  exports: [QueryParamService],
})
export class QueryParamModule {}
