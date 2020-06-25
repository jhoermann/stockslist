import { Component, OnInit } from '@angular/core'
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'
import * as pluginDataLabels from 'chartjs-plugin-datalabels'
import { Label } from 'ng2-charts'
import { StocksService } from './../services/stocks.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{
      ticks: {min: 0, max: 100, callback: (value, index, values) => value + '%'},
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
          this.barChartLabels = stocks.map(stock => stock.name)
          const total = this.stocksService.sums.total
          const chartData = stocks.map(stock => {
            return (stock.total / total) * 100
          })
          this.barChartData = [{
            data: chartData, label: 'Percent weights'
          }]
        })
  }

}
