import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShortPollingModule } from './short-polling/short-polling.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    ShortPollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
