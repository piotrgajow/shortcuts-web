import { Component, OnInit } from '@angular/core';

import { Route } from '../../domain/route';
import { RouteService } from '../../services/route.service';

@Component({
    templateUrl: './route-list-view.component.html',
})
export class RouteListViewComponent implements OnInit {
    routes: Array<Route>;

    constructor(
        private readonly routeService: RouteService,
    ) {
    }

    ngOnInit(): void {
        this.routeService.getRoutes()
            .then((routes) => this.routes = routes)
            .catch();
    }

}
