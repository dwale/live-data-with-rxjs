import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebSocketRoutingModule } from './web-socket-routing.module';
import { LiveChartComponent } from './live-chart/live-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LiveChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    HttpClientModule,
    WebSocketRoutingModule,
  ],
})
export class WebSocketModule {}
