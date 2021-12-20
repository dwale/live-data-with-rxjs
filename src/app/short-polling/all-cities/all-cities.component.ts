import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SPollingService } from '../s-polling.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.scss'],
})
export class AllCitiesComponent implements OnInit {
  cities$!: Observable<Weather[]>;

  constructor(private spollingService: SPollingService) {
    this.cities$ = this.spollingService.getWeatherData();
  }
  ngOnInit(): void {}
}
