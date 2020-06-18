import { Component } from '@angular/core';
import { Account } from './interfaces/account.interface'
import { AccountsService } from './services/accounts.service'
import { StocksService } from './services/stocks.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stockslist'
  account: Account

  constructor(
    private accountsService: AccountsService,
    private stocksService: StocksService
  ) {}

  ngOnInit() {
    this.accountsService.account.subscribe(account => this.account = account)
    // Get Account
    this.accountsService.getAccount(1)
    // Get Stocks
    this.stocksService.getStocks()
  }
}
