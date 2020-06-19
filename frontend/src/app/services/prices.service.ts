import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Price } from './../interfaces/price.interface'

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:3000'

  getPricesOfStock(stockId: number): Observable<Price[]> {
    return this.http.get<Price[]>(`/stocks/${stockId}/prices`)
  }
}
