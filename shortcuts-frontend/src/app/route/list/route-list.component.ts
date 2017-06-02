import { Component, OnInit } from '@angular/core';

import { Route } from '../route';
import { RouteService } from '../route.service';

@Component({
    selector: 'route-list',
    templateUrl: './route-list.component.html',
})
export class RouteListComponent implements OnInit {
    routes: Route[];

    constructor(
        private routeService: RouteService,
    ) {}

    ngOnInit(): void {
        this.routeService.getRoutes().then((routes) => this.routes = routes)
    }

}
