import { Controller, Get, Param } from '@nestjs/common';
import Database from '../database';
import { Account } from './account.interface'

@Controller('accounts')
export class AccountsController {
  @Get()
  getAccounts(): Account[] {
    return Database.db.get('Accounts');
  }

  @Get(':id')
  getAccount(@Param('id') id): Account {
    return Database.db.get('Accounts')
      .find({id: parseInt(id)})
  }
}
