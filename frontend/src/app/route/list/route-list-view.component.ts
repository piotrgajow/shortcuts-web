import { Component, OnInit } from '@angular/core';

import { Route } from '../route';
import { RouteService } from '../route.service';

@Component({
    templateUrl: './route-list-view.component.html',
})
export class RouteListViewComponent implements OnInit {
    routes: Route[];

    constructor(
        private routeService: RouteService,
    ) {
    }

    ngOnInit(): void {
        this.routeService.getRoutes()
            .then((routes) => this.routes = routes);
    }

}
