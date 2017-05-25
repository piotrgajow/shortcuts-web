import { Component, EventEmitter, Output } from '@angular/core';

import { Route } from '../route';
import { RouteService } from '../route.service';

@Component({
    selector: 'route-form',
    templateUrl: './route-form.component.html',
})
export class RouteFormComponent {
    route: Route = new Route();
    @Output() onNewRoute: EventEmitter<Route> = new EventEmitter<Route>();

    constructor(
        private routeService: RouteService,
    ) {}

    onSubmit(): void {
        this.routeService.saveRoute(this.route).then(route => {
            console.log('new route added');
            console.log(route);
            this.onNewRoute.emit(route);
        })
    }

}
