import { Injectable } from '@nestjs/common'
import Database from '../../database'
import { DividendDate } from './dividend-date.interface'
import { CreateDividendDateDto, UpdateDividendDateDto } from './dtos'

@Injectable()
export class DividendDatesService {
  getDividendDates(stockId: number): DividendDate[] {
    return Database.db.get('DividendDates')
      .filter({stockId})
      .value()
  }

  getDividendDate(id: number): DividendDate {
    return Database.db.get('DividendDates')
      .getById(id)
      .value()
  }

  createDividendDate(stockId, createDividendDateDto: CreateDividendDateDto): DividendDate {
    return Database.db.get('DividendDates')
      .insert({
        stockId,
        ...createDividendDateDto,
        date: new Date().toJSON(),
      })
      .write()
  }

  updateDividendDate(id: number, updateDividendDateDto: UpdateDividendDateDto): DividendDate {
    return Database.db.get('DividendDates')
      .updateById(id, updateDividendDateDto)
      .write()
  }

  removeDividendDate(id: number): DividendDate {
    return Database.db.get('DividendDates')
      .removeById(id)
      .write()
  }
}
