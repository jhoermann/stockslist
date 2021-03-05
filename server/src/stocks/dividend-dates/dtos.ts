import { IsNotEmpty, IsNumber } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class CreateDividendDateDto {
  @IsNumber()
  dividend: number

  @IsNotEmpty()
  date: string
}

export class UpdateDividendDateDto extends PartialType(CreateDividendDateDto) {}
