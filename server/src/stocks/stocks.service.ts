import { Injectable } from '@nestjs/common'
import Database from '../database'
import { Stock } from './stock.interface'
import { CreateStockDto, UpdateStockDto } from './dtos'
import { ActionsService } from './actions/actions.service'
import { DividendDatesService } from './dividend-dates/dividend-dates.service'
import { PricesService } from './prices/prices.service'

@Injectable()
export class StocksService {
  constructor(
    private actionsService: ActionsService,
    private dividendDatesService: DividendDatesService,
    private pricesService: PricesService,
  ) {}

  private setStockProperties(stock) {
    if (stock) {
      // Set Actions, DividendDates and Prices for Stock
      stock.actions = this.actionsService.getActions(stock.id)
      stock.dividendDates = this.dividendDatesService.getDividendDates(stock.id)
      stock.prices = this.pricesService.getPrices(stock.id)
    }
    return stock
  }

  getStocks(accountId: number): Stock[] {
    return Database.db.get('Stocks')
      .filter({accountId})
      .value()
      .map(stock => this.setStockProperties(stock))
  }

  getStock(id: number): Stock {
    const stock = Database.db.get('Stocks')
      .getById(id)
      .value()
    return this.setStockProperties(stock)
  }

  createStock(createStockDto: CreateStockDto): Stock {
    return Database.db.get('Stocks')
      .insert({
        ...createStockDto,
        created: new Date().toJSON(),
      })
      .write()
  }

  updateStock(id: number, updateStockDto: UpdateStockDto): Stock {
    return Database.db.get('Stocks')
      .updateById(id, updateStockDto)
      .write()
  }

  removeStock(id: number): Stock {
    return Database.db.get('Stocks')
      .removeById(id)
      .write()
  }
}
