import { Component, OnInit } from '@angular/core';
import { StocksService } from './../services/stocks.service'
import { Sums } from './../interfaces/sums.interface'

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  constructor(
    private stocksService: StocksService
  ) {}
  sums: Sums

  ngOnInit(): void {
    this.stocksService.stocks.subscribe(() => this.sums = this.stocksService.sums)
  }

}
