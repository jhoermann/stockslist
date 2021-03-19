import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountsModule } from './accounts/accounts.module'
import { StocksModule } from './stocks/stocks.module'

@Module({
  imports: [
    AccountsModule,
    StocksModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
