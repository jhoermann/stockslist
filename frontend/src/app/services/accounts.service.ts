import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { Account } from './../interfaces/account.interface'

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:3000'
  private accountSource = new Subject<Account>()
  account = this.accountSource.asObservable()

  getAccount(id: number) {
    return this.http.get<Account>(this.baseUrl + '/accounts/1')
      .subscribe(account => this.accountSource.next(account))
  }
}
