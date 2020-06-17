import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common'
import { DividendDate } from './dividend-date.interface'
import { CreateDividendDateDto, UpdateDividendDateDto } from './dtos'
import { DividendDatesService } from './dividend-dates.service'

@Controller('stocks/:stockId/dividend-dates')
export class DividendDatesController {
  constructor(private dividendDatesService: DividendDatesService) {}

  // Get all DividendDates of a Stock
  @Get()
  getDividendDates(@Param('stockId', ParseIntPipe) stockId: number): DividendDate[] {
    return this.dividendDatesService.getDividendDates(stockId)
  }

  // Get DividendDate by id
  @Get(':id')
  getDividendDate(@Param('id', ParseIntPipe) id: number): DividendDate {
    return this.dividendDatesService.getDividendDate(id)
  }

  // Create DividendDate
  @Post()
  createDividendDate(@Param('stockId', ParseIntPipe) stockId: number, @Body() createDividendDateDto: CreateDividendDateDto): DividendDate {
    return this.dividendDatesService.createDividendDate(stockId, createDividendDateDto)
  }

  // Update DividendDate
  @Put(':id')
  updateDividendDate(@Param('id', ParseIntPipe) id: number, @Body() updateDividendDateDto: UpdateDividendDateDto): DividendDate {
    return this.dividendDatesService.updateDividendDate(id, updateDividendDateDto)
  }
  // Remove DividendDate
  @Delete(':id')
  removeDividendDate(@Param('id', ParseIntPipe) id: number) {
    return this.dividendDatesService.removeDividendDate(id)
  }
}
