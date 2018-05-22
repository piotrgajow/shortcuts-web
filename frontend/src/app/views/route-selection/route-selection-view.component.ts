import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Route } from '../../domain/route';
import { Trip } from '../../domain/trip';
import { RouteService } from '../../services/route.service';
import { TripService } from '../../services/trip.service';

@Component({
    templateUrl: './route-selection-view.component.html',
})
export class RouteSelectionViewComponent implements OnInit {
    routes: Array<Route> = [];
    selectedRoute: Route | undefined;
    trip: Trip;
    newRouteForm: FormGroup;

    constructor(
        private readonly router: Router,
        private readonly routeService: RouteService,
        private readonly tripService: TripService,
    ) {
        const formControls: any = {};
        formControls.description = new FormControl('', []);
        formControls.locationFrom = new FormControl('', []);
        formControls.locationTo = new FormControl('', []);
        this.newRouteForm = new FormGroup(formControls);
        this.trip = this.tripService.currentTrip;
    }

    ngOnInit(): void {
        this.routeService.getRoutes()
            .then((routes) => this.routes = routes)
            .catch();
    }

    selectRoute(route: Route): void {
        this.selectedRoute = route;
    }

    confirmSelection(): void {
        const routeId = this.selectedRoute && this.selectedRoute.id;
        if (!routeId) {
            throw new Error('No route selected');
        }
        this.tripService.saveTrip(routeId, this.trip)
            .then((response) => this.router.navigateByUrl(''))
            .catch();
    }

    addRoute(): void {
        this.routeService.saveRoute(this.newRouteForm.value)
            .then((res) => {
                this.newRouteForm.reset();
                this.routes.push(res);
            })
            .catch();
    }

}
