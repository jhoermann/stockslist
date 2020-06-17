import { Controller, Get, Post, Param, Body, ParseIntPipe } from '@nestjs/common'
import { Action } from './action.interface'
import { CreateActionDto } from './dtos'
import { ActionsService } from './actions.service'

@Controller('stocks/:stockId/actions')
export class ActionsController {
  constructor(private actionsService: ActionsService) {}

  // Get all Actions of a Stock
  @Get()
  getActions(@Param('stockId', ParseIntPipe) stockId: number): Action[] {
    return this.actionsService.getActions(stockId)
  }

  // Get Action by id
  @Get(':id')
  getAction(@Param('id', ParseIntPipe) id: number): Action {
    return this.actionsService.getAction(id)
  }

  // Create Action
  @Post()
  createAction(@Param('stockId', ParseIntPipe) stockId: number, @Body() createActionDto: CreateActionDto): Action {
    return this.actionsService.createAction(stockId, createActionDto)
  }

}
