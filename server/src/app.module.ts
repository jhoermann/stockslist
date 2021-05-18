import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { AccountsModule } from './accounts/accounts.module'
import dbConfigDefault from '../db-config'

let dbConfig = dbConfigDefault
if (process.env.NODE_ENV === 'test') {
  dbConfig = { ...dbConfigDefault, database: 'stockslist-test' }
}

@Module({
  imports: [
    AccountsModule,
    TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions),
  ],
})
export class AppModule {}
