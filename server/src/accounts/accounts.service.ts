import { Injectable } from '@nestjs/common';
import Database from '../database'
import { Account } from './account.interface'

@Injectable()
export class AccountsService {
    getAccounts(): Account[] {
      return Database.db.get('Accounts').value()
    }

    getAccount(id: number): Account {
      return Database.db.get('Accounts')
        .find({id})
        .value()
    }
}
