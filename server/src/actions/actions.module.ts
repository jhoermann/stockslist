import { Module } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { ActionsController } from './actions.controller';

@Module({
  imports: [],
  providers: [ActionsService],
  controllers: [ActionsController]
})
export class ActionsModule {}
