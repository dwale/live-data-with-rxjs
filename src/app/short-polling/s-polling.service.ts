import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, timer, of } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import {
  concatMap,
  exhaustMap,
  mergeMap,
  retry,
  switchMap,
  takeUntil,
  tap,
  toArray,
} from 'rxjs/operators';
import { Weather } from './weather';

const KEY = 'aa7bb6ab12341d578e32118c3e01c669';
@Injectable({
  providedIn: 'root',
})
export class SPollingService {
  private endSubs$ = new Subject();

  public cities$!: Observable<Weather[]>;
  constructor(private httpClient: HttpClient) {}

  public getWeatherData(): Observable<Weather[]> {
    return timer(1, 10000).pipe(
      switchMap(() => this.fetchWeathers()),
      retry(2),
      takeUntil(this.endSubs$)
    );
  }

  private fetchWeathers(): Observable<Weather[]> {
    const cities = ['London', 'Berlin', 'Lagos', 'Amsterdam'];

    return from(cities).pipe(
      tap((city) => console.log('fetching weather for', city)),
      concatMap((city) =>
        this.httpClient.get<Weather>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
        )
      ),
      toArray()
    );
  }

  ngOnDestroy() {
    this.endSubs$.next();
    this.endSubs$.complete();
  }
}
