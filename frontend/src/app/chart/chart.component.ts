import { Component, OnInit } from '@angular/core'
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'
import * as pluginDataLabels from 'chartjs-plugin-datalabels'
import { Label } from 'ng2-charts'
import { StocksService } from './../services/stocks.service'
import _ from 'lodash'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    scales: { xAxes: [{}], yAxes: [{
      ticks: {min: 0, callback: (value, index, values) => value + '%'},
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  }
  public barChartLabels: Label[]
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [pluginDataLabels];
  public barChartLegend = true;

  public barChartData: ChartDataSets[]

  constructor(
    private stocksService: StocksService
  ) {}

  ngOnInit() {
      this.stocksService.stocks
        .subscribe(stocks => {
          // Build sorted stock data with name and percentWeight
          const total = this.stocksService.sums.total
          let stockData = stocks.map(stock => {
            const percentWeight: number = parseFloat(((stock.total / total) * 100).toFixed(2))
            return {name: stock.name , percentWeight}
          })
          stockData = _.orderBy(stockData, 'percentWeight', 'desc')

          // Set labels and data to chart
          this.barChartLabels = stockData.map(stock => stock.name)
          this.barChartData = [{
            data: stockData.map(stock => stock.percentWeight),
            label: 'Percent weights'
          }]
        })
  }

}
