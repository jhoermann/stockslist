import { IsNotEmpty, IsNumber } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class CreateStockDto {
  @IsNumber()
  accountId: string

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  isin: string

  @IsNotEmpty()
  wkn: string

  @IsNotEmpty()
  industrySector: string
}

export class UpdateStockDto extends PartialType(CreateStockDto) {}
