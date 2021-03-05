import { Component, OnInit } from '@angular/core'
import {MatDialog, MatDialogRef } from '@angular/material/dialog'
import { StocksService } from './../services/stocks.service'
import { Sums } from './../interfaces/sums.interface'
import { AddStockDialogComponent } from './add-stock-dialog/add-stock-dialog.component'
import { Stock } from '../interfaces/stock.interface'
import { AccountsService } from '../services/accounts.service'
import { Account } from '../interfaces/account.interface'

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  constructor(
    private accountsService: AccountsService,
    private stocksService: StocksService,
    public dialog: MatDialog
  ) { }
  
  currentAccount: Account
  sums: Sums
  newStock: Stock

  ngOnInit(): void {
    this.accountsService.account.subscribe(account => this.currentAccount = account)
    this.stocksService.stocks.subscribe(() => this.sums = this.stocksService.sums)
  }

  openAddStockDialog() {
    const dialogRef = this.dialog.open(AddStockDialogComponent)
    dialogRef.afterClosed().subscribe((newStock: Stock) => {
      newStock.accountId = this.currentAccount.id
      console.log(newStock)
      this.stocksService.addStock(newStock)
    });
  }

}
