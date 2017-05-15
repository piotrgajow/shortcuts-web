import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { Route } from '../route';
import { RouteService } from '../route.service';

@Component({
  selector: 'route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.css']
})
export class RouteSelectorComponent implements OnInit {
  addingNewRoute: boolean;
  route: Route;
  routes: Route[] = [];
  selectedRoute: Route;
  @Output() onAddigNewRouteToggled = new EventEmitter<boolean>();

  constructor(private routeService: RouteService) {}

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

  confirmSelection(): void {
      console.log('Selected route: ' + this.selectedRoute.toString());
  }

  ngOnInit(): void {
    this.routeService.getRoutes().then(routes => this.routes = routes);
  }
}
