import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { ActionsModule } from './actions/actions.module';
import { DividendDatesModule } from './dividend-dates/dividend-dates.module';
import { PricesModule } from './prices/prices.module';

@Module({
  controllers: [StocksController],
  providers: [StocksService],
  imports: [ActionsModule, DividendDatesModule, PricesModule]
})
export class StocksModule {}
