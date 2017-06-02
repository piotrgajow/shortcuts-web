import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './shared/menu/main-menu.component';
import { RouteListComponent } from './route/list/route-list.component';
import { RouteSelectorComponent } from './route/selector/route-selector.component';
import { TripComponent } from './trip/trip.component';

const routes: Routes = [
  { path: 'newTrip', component: TripComponent },
  { path: 'selectRoute', component: RouteSelectorComponent },
  { path: 'routes', component: RouteListComponent },
  { path: '', redirectTo: '/routes', pathMatch: 'full' }
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
