import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { DividendDate } from './../interfaces/dividend-date.interface'

@Injectable({
  providedIn: 'root'
})
export class DividendDatesService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:3000'

  getDividendDatesOfStock(stockId: number): Observable<DividendDate[]> {
    return this.http.get<DividendDate[]>(`/stocks/${stockId}/dividend-dates`)
  }
}
