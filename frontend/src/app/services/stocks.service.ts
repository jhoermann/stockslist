import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { Stock, EnhancedStock } from './../interfaces/stock.interface'
import { Sums } from './../interfaces/sums.interface'
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
  sums: Sums

  getStocks() {
    return this.http.get<Stock[]>(this.baseUrl + '/accounts/1/stocks')
      .subscribe((stocks: Stock[]) => {
        const enhancedStocks: EnhancedStock[] = stocks.map(stock => {
          const stockHelper = new StockHelper(stock)
          return stockHelper.enhanceStock()
        })
        this.calculateSums(enhancedStocks)
        this.stocksSource.next(enhancedStocks)
      })
  }

  calculateSums(stocks: EnhancedStock[]) {
    const total: number = stocks
      .map(stock => stock.total)
      .reduce((priceA, priceB) => priceA + priceB)
    const totalInclDividends: number = total + stocks
      .map(stock => stock.earnedDividends)
      .reduce((earnedDividendA, earnedDividendB) => earnedDividendA + earnedDividendB)
    const invested: number = stocks
      .map(stock => stock.buyPriceTotal)
      .reduce((priceA, priceB) => priceA + priceB)
    const winLoss: number = stocks
      .map(stock => stock.winLoss)
      .reduce((winLossA, winLossB) => winLossA + winLossB)
    const winLossPercent = `${((winLoss / total) * 100).toFixed(2)}%`
    this.sums = {total, totalInclDividends, invested, winLoss, winLossPercent}
  }
}
