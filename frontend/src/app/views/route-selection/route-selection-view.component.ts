import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { Route } from '../../domain/route';
import { Trip } from '../../domain/trip';
import { RouteService } from '../../services/route.service';
import { TripService } from '../../services/trip.service';

@Component({
    templateUrl: './route-selection-view.component.html',
})
export class RouteSelectionViewComponent implements OnInit {
    routes: Route[] = [];
    selectedRoute: Route;
    trip: Trip;
    newRouteForm: FormGroup;

    constructor(
        private router: Router,
        private routeService: RouteService,
        private tripService: TripService,
    ) {
        const formControls: any = {};
        formControls.description = new FormControl('', []);
        this.newRouteForm = new FormGroup(formControls);
    }

    ngOnInit(): void {
        this.trip = this.tripService.currentTrip;
        this.routeService.getRoutes().then(routes => this.routes = routes);
    }

    selectRoute(route: Route): void {
        this.selectedRoute = route;
    }

    confirmSelection(): void {
        this.tripService.saveTrip(this.selectedRoute.id, this.trip)
            .then(response => this.router.navigateByUrl(''));
    }

    addRoute(): void {
        this.routeService.saveRoute(this.newRouteForm.value)
            .then((res) => {
                this.newRouteForm.reset();
                this.routes.push(res);
            });
    }

}
