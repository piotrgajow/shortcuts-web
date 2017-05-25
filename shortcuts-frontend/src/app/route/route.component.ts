import { Component, Input, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { Route } from './route';

@Component({
    templateUrl: './route.component.html'
})
export class RouteComponent implements OnInit {
    selectedRoute: Route;
    addingNewRoute: boolean;
    time: number;

    constructor(private activatedRoute: ActivatedRoute) {}

    onAddigNewRouteToggled(addingNewRoute: boolean): void {
        this.addingNewRoute = addingNewRoute;
    }

    ngOnInit(): void {
        this.activatedRoute.params.forEach((params: Params) => {
            this.time = params['time'];
        });
    }
}
