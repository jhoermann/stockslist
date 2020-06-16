import { Module } from '@nestjs/common'
import { AccountsController } from './accounts.controller'
import { AccountsService } from './accounts.service'
import { StocksService } from './../stocks/stocks.service'

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, StocksService],
})
export class AccountsModule {}
