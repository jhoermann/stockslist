import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { Account } from './account.interface'
import { Stock } from '../stocks/stock.interface'
import { AccountsService } from './accounts.service'
import { StocksService } from './../stocks/stocks.service'

@Controller('accounts')
export class AccountsController {
  constructor(
    private accountsService: AccountsService,
    private stocksService: StocksService
  ) {}

  // Get all Accounts
  @Get()
  getAccounts(): Account[] {
    return this.accountsService.getAccounts()
  }
  // Get Account by id
  @Get(':id')
  getAccount(@Param('id', ParseIntPipe) id: number): Account {
    return this.accountsService.getAccount(id)
  }
  // Get Stocks by Account
  @Get(':accountId/stocks')
  getStocks(@Param('accountId', ParseIntPipe) accountId: number): Stock[] {
    return this.stocksService.getStocks(accountId)
  }
}
