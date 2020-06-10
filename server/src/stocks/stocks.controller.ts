import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common'
import Database from '../database'
import { Stock } from './stock.interface'
import { CreateStockDto, UpdateStockDto } from './dtos'

@Controller('stocks')
export class StocksController {
  // Get Stock by id
  @Get(':id')
  getAccount(@Param('id', ParseIntPipe) id: number): Stock {
    return Database.db.get('Stocks')
      .find({id})
  }
  // Create Stock
  @Post()
  createStock(@Body() createStockDto: CreateStockDto): Stock {
    return Database.db.get('Stocks')
      .push(createStockDto)
      .write()
  }
  // Update Stock
  @Put(':id')
  updateStock(@Param('id', ParseIntPipe) id: number, @Body() updateStockDto: UpdateStockDto): Stock {
    return Database.db.get('Stocks')
      .find({id})
      .assign(updateStockDto)
      .write()
  }
  // Remove Stock
  @Delete(':id')
  removeStock(@Param('id', ParseIntPipe) id: number) {
    return Database.db.get('Stocks')
      .remove({id})
      .write()
  }
}
