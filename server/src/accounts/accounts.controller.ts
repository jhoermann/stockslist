import { Controller, Get } from '@nestjs/common'
import { Account } from './account.entity'
import { AccountsService } from './accounts.service'

@Controller('accounts')
export class AccountsController {
  constructor(
    private accountsService: AccountsService,
  ) {}

  // Get all Accounts
  @Get()
  async getAccounts(): Promise<Account[]> {
    return await this.accountsService.findAll()
  }
  // Get Account by id
  @Get(':id')
  async getAccount(id: string): Promise<Account | undefined> {
    return await this.accountsService.findOne(id)
  }
  // // Get Stocks by Account
  // @Get(':accountId/stocks')
  // getStocks(@Param('accountId', ParseIntPipe) accountId: number): Stock[] {
  //   return this.stocksService.getStocks(accountId)
  // }
}
