import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common'
import Database from '../database'
import { Stock } from './stock.interface'
import { CreateStockDto, UpdateStockDto } from './dtos'

@Controller('stocks')
export class StocksController {
  // Get Stock by id
  @Get(':id')
  getStock(@Param('id', ParseIntPipe) id: number): Stock {
    return Database.db.get('Stocks')
      .getById(id)
      .value()
  }
  // Create Stock
  @Post()
  createStock(@Body() createStockDto: CreateStockDto): Stock {
    return Database.db.get('Stocks')
      .insert({
        ...createStockDto,
        created: new Date(),
      })
      .write()
  }
  // Update Stock
  @Put(':id')
  updateStock(@Param('id', ParseIntPipe) id: number, @Body() updateStockDto: UpdateStockDto): Stock {
    return Database.db.get('Stocks')
      .updateById(id, updateStockDto)
      .write()
  }
  // Remove Stock
  @Delete(':id')
  removeStock(@Param('id', ParseIntPipe) id: number) {
    return Database.db.get('Stocks')
      .removeById(id)
      .write()
  }
}
