import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadProgressComponent } from './upload-progress/upload-progress.component';

const routes: Routes = [
  {
    path: '',
    component: UploadProgressComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LongPollingRoutingModule {}
