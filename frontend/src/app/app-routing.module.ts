import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteListComponent } from './route/list/route-list.component';
import { RouteSelectorComponent } from './route/selector/route-selector.component';
import { TripViewComponent } from './trip/trip-view.component';

const routes: Routes = [
    { path: 'newTrip', component: TripViewComponent },
    { path: 'selectRoute', component: RouteSelectorComponent },
    { path: 'routes', component: RouteListComponent },
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
