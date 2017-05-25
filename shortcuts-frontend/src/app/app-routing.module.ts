import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './main/main-menu.component';
import { RouteComponent } from './route/route.component';
import { TripComponent } from './trip/trip.component';

const routes: Routes = [
  { path: 'newTrip', component: TripComponent },
  { path: 'menu', component: MainMenuComponent },
  { path: 'route', component: RouteComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
