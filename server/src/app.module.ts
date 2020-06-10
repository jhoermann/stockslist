import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [AccountsModule, StocksModule],
})
export class AppModule {}
