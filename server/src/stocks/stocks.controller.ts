import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common'
import { Stock } from './stock.interface'
import { CreateStockDto, UpdateStockDto } from './dtos'
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private stocksService: StocksService) {}

  // Get Stock by id
  @Get(':id')
  getStock(@Param('id', ParseIntPipe) id: number): Stock {
    return this.stocksService.getStock(id)
  }
  // Create Stock
  @Post()
  createStock(@Body() createStockDto: CreateStockDto): Stock {
    return this.stocksService.createStock(createStockDto)
  }
  // Update Stock
  @Put(':id')
  updateStock(@Param('id', ParseIntPipe) id: number, @Body() updateStockDto: UpdateStockDto): Stock {
    return this.stocksService.updateStock(id, updateStockDto)
  }
  // Remove Stock
  @Delete(':id')
  removeStock(@Param('id', ParseIntPipe) id: number) {
    return this.stocksService.removeStock(id)
  }
}
