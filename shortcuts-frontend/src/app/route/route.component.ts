import { Component } from '@angular/core';

import { Route } from './route';

@Component({
    templateUrl: './route.component.html'
})
export class RouteComponent {
    selectedRoute: Route;
    addingNewRoute: boolean;

    onAddigNewRouteToggled(addingNewRoute: boolean): void {
        this.addingNewRoute = addingNewRoute;
    }
}
