import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Action } from './../interfaces/action.interface'

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:3000'

  getActionsOfStock(stockId: number): Observable<Action[]> {
    return this.http.get<Action[]>(`/stocks/${stockId}/actions`)
  }
}
