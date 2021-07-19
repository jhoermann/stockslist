import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common'
import { CreateStockDto, UpdateStockDto } from './dtos'
import { Stock } from './stock.entity'
import { StocksService } from './stocks.service'

@Controller('stocks')
export class StocksController {
  constructor(private stocksService: StocksService) {}

  // Get Stock by id
  @Get(':id')
  getStock(id: string): Promise<Stock | undefined> {
    return this.stocksService.findOne(id)
  }
  // Create Stock
  @Post()
  createStock(@Body() createStockDto: CreateStockDto): Promise<Stock> {
    return this.stocksService.create(createStockDto)
  }
  // // Update Stock
  // @Put(':id')
  // updateStock(@Param('id', ParseIntPipe) id: number, @Body() updateStockDto: UpdateStockDto): Stock {
  //   return this.stocksService.updateStock(id, updateStockDto)
  // }
  // // Remove Stock
  // @Delete(':id')
  // removeStock(@Param('id', ParseIntPipe) id: number): Stock {
  //   return this.stocksService.removeStock(id)
  // }
}
