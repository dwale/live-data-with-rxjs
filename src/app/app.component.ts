import { Component } from '@angular/core';
import { Subscription, of } from 'rxjs';
import * as Highcharts from 'highcharts';
import { webSocket } from 'rxjs/webSocket';
import { concatMap, delay, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-RxJsWebSocket-HighCharts';
}
