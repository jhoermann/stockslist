import { Injectable } from '@nestjs/common';
import Database from '../database'
import { Stock } from './stock.interface'
import { CreateStockDto, UpdateStockDto } from './dtos'

@Injectable()
export class StocksService {
    getStocks(accountId: number): Stock[] {
      return Database.db.get('Stocks')
        .filter({accountId})
        .value()
    }

    getStock(id: number): Stock {
      return Database.db.get('Stocks')
        .getById(id)
        .value()
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
