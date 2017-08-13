import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataChartComponent } from './data-chart/data-chart.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AccountComponent } from './account/account.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReportsComponent } from './reports/reports.component';
import { HistoryComponent } from './history/history.component';
import { BankingComponent } from './banking/banking.component';
import { AppPipe } from './app.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    DataChartComponent,
    PortfolioComponent,
    AccountComponent,
    AuthenticationComponent,
    ReportsComponent,
    HistoryComponent,
    BankingComponent,
    AppPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
