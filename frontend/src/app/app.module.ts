import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button' 
import { HttpClientModule }    from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog' 

import { ChartsModule } from 'ng2-charts'
import { ChartComponent } from './chart/chart.component'
import { GeneralInfoComponent } from './general-info/general-info.component'
import { DataTableComponent } from './data-table/data-table.component'
import { PricePipe } from './pipes/price.pipe'
import { DatePipe } from './pipes/date.pipe';
import { AddStockDialogComponent } from './general-info/add-stock-dialog/add-stock-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    GeneralInfoComponent,
    DataTableComponent,
    PricePipe,
    DatePipe,
    AddStockDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    ChartsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
