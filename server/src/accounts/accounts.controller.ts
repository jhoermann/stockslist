import { Controller, Get } from '@nestjs/common';
import Database from '../database';

@Controller('accounts')
export class AccountsController {
  @Get()
  database(): string {
    console.log(Database)
    return Database.db;
  }
}
