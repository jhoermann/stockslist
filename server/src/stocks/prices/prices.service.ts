import { Injectable } from '@nestjs/common'
import Database from '../../database'
import { Price } from './price.interface'
import { CreatePriceDto } from './dtos'

@Injectable()
export class PricesService {
  getPrices(stockId: number): Price[] {
    return Database.db.get('Prices')
      .filter({stockId})
      .sortBy('date')
      .value()
  }

  getPrice(id: number): Price {
    return Database.db.get('Prices')
      .getById(id)
      .value()
  }

  createPrice(stockId: number, createPriceDto: CreatePriceDto): Price {
    return Database.db.get('Prices')
      .insert({
        stockId,
        ...createPriceDto,
        date: new Date().toJSON(),
      })
      .write()
  }
}
