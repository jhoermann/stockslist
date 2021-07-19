import { Body, Controller, Get, Post } from '@nestjs/common'
import { Account } from './account.entity'
import { AccountsService } from './accounts.service'
import { CreateAccountDto } from './dtos'

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
  // Create Account
  @Post()
  createAccount(@Body() account: CreateAccountDto): Promise<Account> {
    console.log(account)
    return this.accountsService.create(account)
  }

  // // Get Stocks by Account
  // @Get(':accountId/stocks')
  // getStocks(@Param('accountId', ParseIntPipe) accountId: number): Stock[] {
  //   return this.stocksService.getStocks(accountId)
  // } 
}
