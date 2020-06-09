import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import Database from '../database';
import { Stock } from './stock.interface'
import { CreateStockDto, UpdateStockDto } from './dtos'

@Controller('stocks')
export class StocksController {
  // Get Stocks by Account
  @Get('/account/:accountId/stocks')
  getStocks(@Param('accountId') accountId: number): Stock {
    return Database.db.get('Stocks')
      .filter({accountId})
  }
  // Create Stock
  @Post('/account/:accountId/stocks')
  createStock(@Param('accountId') accountId: number, @Body() createStockDto: CreateStockDto): Stock {
    return Database.db.get('Stocks')
      .push(createStockDto)
      .write()
  }
  // Update Stock
  @Put('/account/:accountId/stocks/:id')
  updateStock(@Param() params, @Body() updateStockDto: UpdateStockDto): Stock {
    return Database.db.get('Stocks')
      .find({ id: parseInt(params.id), accountId: parseInt(params.accountId) })
      .assign(updateStockDto)
      .write()
  }
  // Remove Stock
  @Delete('/account/:accountId/stocks/:id')
  removeStock(@Param('id') id: number, @Param('accountId') accountId: number) {
    return Database.db.get('Stocks')
      .remove({id, accountId})
      .write()
  }
}
