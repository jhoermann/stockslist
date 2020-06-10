import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import Database from '../database';
import { Account } from './account.interface'
import { Stock } from '../stocks/stock.interface'

@Controller('accounts')
export class AccountsController {
  // Get all Accounts
  @Get()
  getAccounts(): Account[] {
    return Database.db.get('Accounts');
  }
  // Get Account by id
  @Get(':id')
  getAccount(@Param('id', ParseIntPipe) id: number): Account {
    console.log(typeof id)
    return Database.db.get('Accounts')
      .find({id})
  }
  // Get Stocks by Account
  @Get(':accountId/stocks')
  getStocks(@Param('accountId', ParseIntPipe) accountId: number): Stock[] {
    return Database.db.get('Stocks')
      .filter({accountId})
  }
}
