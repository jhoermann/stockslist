import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { Stock, EnhancedStock } from './../interfaces/stock.interface'
import { StockHelper } from './../classes/stock-helper'

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(
    private http: HttpClient,
  ) {}
  private baseUrl = 'http://localhost:3000'
  private stocksSource = new Subject<EnhancedStock[]>()
  stocks = this.stocksSource.asObservable()

  getStocks() {
    return this.http.get<Stock[]>(this.baseUrl + '/accounts/1/stocks')
      .subscribe(stocks => {
        const enhancedStocks = stocks.map(stock => {
          const stockHelper = new StockHelper(stock)
          return stockHelper.enhanceStock()
        })
        this.stocksSource.next(enhancedStocks)
      })
  }
}
