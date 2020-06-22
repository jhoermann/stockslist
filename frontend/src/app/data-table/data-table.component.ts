import { Component, OnInit } from '@angular/core';
import { StocksService } from './../services/stocks.service'
import { Stock } from './../interfaces/stock.interface'

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

  displayedColumns: string[] = ['name', 'isin', 'wkn', 'industrySector', 'created'];
  dataSource: Stock[];

  constructor(
    private stocksService: StocksService
  ) {}

  ngOnInit(): void {
    this.stocksService.stocks.subscribe(stocks => this.dataSource = stocks)
  }

}
