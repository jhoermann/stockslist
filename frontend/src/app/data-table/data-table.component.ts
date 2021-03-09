import { Component, OnInit } from '@angular/core';
import { StocksService } from './../services/stocks.service'
import { Stock, EnhancedStock } from './../interfaces/stock.interface'
import { Sums } from './../interfaces/sums.interface'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'quantity',
    'buyPrice',
    'currentPrice',
    'total',
    'winLoss',
    'winLossPercent',
    'earnedDividends',
    'isinWkn',
    'industrySector',
    'created',
    'percentWeight',
    'actions',
  ];
  dataSource: Stock[];

  constructor(
    private stocksService: StocksService
  ) {}
  sums: Sums

  getPercentWeight(stock: EnhancedStock) {
    if(isNaN(stock.total) || isNaN(this.sums.total)) {
      return '0%'
    }
    return `${((stock.total / this.sums.total) * 100).toFixed(2)}%`
  }

  ngOnInit(): void {
    this.stocksService.stocks.subscribe(stocks => {
      this.sums = this.stocksService.sums
      this.dataSource = stocks
    })
  }

}
