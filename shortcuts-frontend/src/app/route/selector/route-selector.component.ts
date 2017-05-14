import { Component, EventEmitter, Output } from '@angular/core';

import { Route } from '../route';

@Component({
    selector: 'route-selector',
    templateUrl: './route-selector.component.html',
    styleUrls: ['./route-selector.component.css']
})
export class RouteSelectorComponent {
    addingNewRoute: boolean;
    route: Route;
    routes: Route[] = [];
    selectedRoute: Route;
    @Output() onAddigNewRouteToggled = new EventEmitter<boolean>();

    constructor() {
        let x = new Route()
        x.description = 'test route';
        this.routes.push(x);
    }

    onSelect(aRoute): void {
        if (aRoute === null) {
            this.addingNewRoute = true;
            this.selectedRoute = null;
        } else {
            this.addingNewRoute = false;
            this.selectedRoute = aRoute;
        }
        this.onAddigNewRouteToggled.emit(this.addingNewRoute);
    }
}
