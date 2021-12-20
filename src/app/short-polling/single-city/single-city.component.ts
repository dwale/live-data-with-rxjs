import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'app-single-city',
  templateUrl: './single-city.component.html',
  styleUrls: ['./single-city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleCityComponent {
  @Input() weatherData!: Weather;
}
