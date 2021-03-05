import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator'

enum ActionType { buy, sell }

export class CreateActionDto {
  @IsNotEmpty()
  @IsEnum(ActionType)
  type: string

  @IsNumber()
  quantity: number

  @IsNumber()
  price: number

  @IsNumber()
  fees: number
}
