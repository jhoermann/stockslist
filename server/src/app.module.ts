import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { StocksModule } from './stocks/stocks.module';
import { ActionsModule } from './actions/actions.module';
import { DividendDatesModule } from './dividend-dates/dividend-dates.module';

@Module({
  imports: [AccountsModule, StocksModule, ActionsModule, DividendDatesModule],
})
export class AppModule {}
