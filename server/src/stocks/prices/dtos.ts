import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreatePriceDto {
  @IsNumber()
  price: number

  @IsNotEmpty()
  date: string
}
