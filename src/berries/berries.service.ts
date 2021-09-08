import { Injectable } from '@nestjs/common';

@Injectable()
export class BerriesService {
  berries(): string {
    return 'Hello!, berries for you!!';
  }
}
