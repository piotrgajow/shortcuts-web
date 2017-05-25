import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { Route } from '../route';
import { RouteService } from '../route.service';
import { Trip } from '../../trip/trip';
import { TripService } from '../../trip/trip.service';

@Component({
  selector: 'route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.css']
})
export class RouteSelectorComponent implements OnInit {
  routes: Route[] = [];
  selectedRoute: Route;
  trip: Trip;

  constructor(
      private router: Router,
      private routeService: RouteService,
      private activatedRoute: ActivatedRoute,
      private tripService: TripService,
  ) {}

  onSelect(selectedRoute): void {
      this.selectedRoute = selectedRoute;
  }

  confirmSelection(): void {
      this.tripService.saveTrip(this.selectedRoute.id, this.trip);
      this.router.navigateByUrl('');
  }

  ngOnInit(): void {
    this.routeService.getRoutes().then(routes => this.routes = routes);
    this.trip = this.tripService.currentTrip;
  }

  addRoute(route: Route): void {
      this.routes.push(route);
  }

}
