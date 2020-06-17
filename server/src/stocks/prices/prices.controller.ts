import { Controller, Get, Post, Param, Body, ParseIntPipe } from '@nestjs/common'
import { Price } from './price.interface'
import { CreatePriceDto } from './dtos'
import { PricesService } from './prices.service'

@Controller('stocks/:stockId/prices')
export class PricesController {
  constructor(private pricesService: PricesService) {}

  // Get all Prices of a Stock
  @Get()
  getPrices(@Param('stockId', ParseIntPipe) stockId: number): Price[] {
    return this.pricesService.getPrices(stockId)
  }

  // Get Price by id
  @Get(':id')
  getPrice(@Param('id', ParseIntPipe) id: number): Price {
    return this.pricesService.getPrice(id)
  }

  // Create Price
  @Post()
  createPrice(@Param('stockId', ParseIntPipe) stockId: number, @Body() createPriceDto: CreatePriceDto): Price {
    return this.pricesService.createPrice(stockId, createPriceDto)
  }
}
