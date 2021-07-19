import { Module } from '@nestjs/common'
import { StocksController } from './stocks.controller'
import { StocksService } from './stocks.service'

@Module({
  controllers: [StocksController],
  providers: [StocksService],
  imports: [ActionsModule, DividendDatesModule, PricesModule]
})
export class StocksModule {}
