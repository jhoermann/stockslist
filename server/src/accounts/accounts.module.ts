import { Module } from '@nestjs/common'
import { AccountsController } from './accounts.controller'
import { AccountsService } from './accounts.service'
import { StocksService } from './../stocks/stocks.service'
import { ActionsService } from './../stocks/actions/actions.service'
import { DividendDatesService } from './../stocks/dividend-dates/dividend-dates.service'
import { PricesService } from './../stocks/prices/prices.service'

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, StocksService, ActionsService, DividendDatesService, PricesService],
})
export class AccountsModule {}
