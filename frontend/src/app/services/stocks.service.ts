import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { Stock } from './../interfaces/stock.interface'

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:3000'
  private stocksSource = new Subject<Stock[]>()
  stocks = this.stocksSource.asObservable()

  getStocks() {
    return this.http.get<Stock[]>(this.baseUrl + '/accounts/1/stocks')
      .subscribe(stocks => this.stocksSource.next(stocks))
  }
}
