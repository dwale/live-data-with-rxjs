import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LongPollingRoutingModule } from './long-polling-routing.module';
import { UploadProgressComponent } from './upload-progress/upload-progress.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UploadProgressComponent],
  imports: [CommonModule, HttpClientModule, LongPollingRoutingModule],
})
export class LongPollingModule {}
