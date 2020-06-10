import { Module } from '@nestjs/common';
import { DividendDatesController } from './dividend-dates.controller';
import { DividendDatesService } from './dividend-dates.service';

@Module({
  controllers: [DividendDatesController],
  providers: [DividendDatesService]
})
export class DividendDatesModule {}
