import { Module } from '@nestjs/common'
import { DividendDatesController } from './dividend-dates.controller'
import { DividendDatesService } from './dividend-dates.service'

@Module({
  controllers: [DividendDatesController],
  providers: [DividendDatesService],
  exports: [DividendDatesService],
})
export class DividendDatesModule {}
