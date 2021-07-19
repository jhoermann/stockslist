import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Stock } from './stock.entity'
import { CreateStockDto } from './dtos'

@Injectable()
export class StocksService {
    constructor(
      @InjectRepository(Stock)
      private stocksRepository: Repository<Stock>
    ) {}

    findAll(): Promise<Stock[]> {
      return this.stocksRepository.find()
    }

    findOne(id: string): Promise<Stock | undefined> {
      return this.stocksRepository.findOne(id)
    }

    create(stock: CreateStockDto): Promise<Stock> {
      return this.stocksRepository.save(stock)
    }
}
