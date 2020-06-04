import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from './interfaces/account.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private http: HttpClient,
  ) {}

  title = 'stockslist'
  account: Account

  ngOnInit() {
    this.getAccount()
  }

  getAccount():void {
    this.http.get('http://localhost:3000/accounts/1')
      .subscribe((account:Account) => this.account = account)
  }
}
