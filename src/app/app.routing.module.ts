import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'samples', pathMatch: 'full' },

  { path: 'samples', component: HomeScreenComponent, pathMatch: 'full' },
  {
    path: 'short-polling',
    loadChildren: () =>
      import('./short-polling/short-polling.module').then(
        (m) => m.ShortPollingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
