import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Account } from './account.entity'
import { CreateAccountDto } from './dtos'

@Injectable()
export class AccountsService {
    constructor(
      @InjectRepository(Account)
      private accountsRepository: Repository<Account>
    ) {}

    findAll(): Promise<Account[]> {
      return this.accountsRepository.find()
    }

    findOne(id: string): Promise<Account | undefined> {
      return this.accountsRepository.findOne(id)
    }

    create(account: CreateAccountDto): Promise<Account> {
      return this.accountsRepository.save(account)
    }
}
