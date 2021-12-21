import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, switchMap, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LPollingService {
  constructor(private httpClient: HttpClient) {}

  public checkStatus(): Observable<any> {
    return interval(1500).pipe(
      switchMap(() => this.httpClient.get('http://localhost:8080/upload')),
      map((data: any) => console.log(data)),
      takeWhile((data: any) => data.message === 'complete')
    );
  }
}
