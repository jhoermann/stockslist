import { Injectable } from '@nestjs/common';
import Database from '../../database'
import { Action } from './action.interface'
import { CreateActionDto } from './dtos'

@Injectable()
export class ActionsService {
  getActions(stockId: number): Action[] {
    return Database.db.get('Actions')
      .filter({stockId})
      .sortBy('date')
      .value()
  }

  getAction(id: number): Action {
    return Database.db.get('Actions')
      .getById(id)
      .value()
  }

  createAction(stockId: number, createActionDto: CreateActionDto): Action {
    return Database.db.get('Actions')
      .insert({
        stockId,
        ...createActionDto,
        date: new Date().toJSON(),
      })
      .write()
  }

}
