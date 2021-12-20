import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { SingleCityComponent } from './single-city/single-city.component';
import { ShortPollingRoutingModule } from './short-polling.routing.module';

@NgModule({
  declarations: [AllCitiesComponent, SingleCityComponent],
  imports: [CommonModule, ShortPollingRoutingModule],
})
export class ShortPollingModule {}
