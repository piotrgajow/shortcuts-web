import { Component } from '@angular/core';

import { Route } from './route';

@Component({
    selector: 'route-form',
    templateUrl: './route-form.component.html'
})
export class RouteFormComponent {
    route: Route = new Route();

    onSubmit(): void {
        console.log(this.route);
    }
}
