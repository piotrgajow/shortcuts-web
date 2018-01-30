import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteListViewComponent } from './views/route-list/route-list-view.component';
import { TripViewComponent } from './views/trip/trip-view.component';
import { RouteSelectionViewComponent } from './views/route-selection/route-selection-view.component';

const routes: Routes = [
    { path: 'newTrip', component: TripViewComponent },
    { path: 'selectRoute', component: RouteSelectionViewComponent },
    { path: 'routes', component: RouteListViewComponent },
    { path: '', redirectTo: '/routes', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
