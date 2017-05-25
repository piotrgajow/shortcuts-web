import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { Route } from '../route';
import { RouteService } from '../route.service';

@Component({
  selector: 'route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.css']
})
export class RouteSelectorComponent implements OnInit {
  route: Route;
  routes: Route[] = [];
  selectedRoute: Route;
  time: number;

  constructor(
      private router: Router,
      private routeService: RouteService,
      private activatedRoute: ActivatedRoute,
  ) {}

  onSelect(selectedRoute): void {
      this.selectedRoute = selectedRoute;
  }

  confirmSelection(): void {
      console.log('Selected route: ' + this.selectedRoute.toString());
      this.router.navigateByUrl('');
  }

  ngOnInit(): void {
    this.routeService.getRoutes().then(routes => this.routes = routes);
    this.activatedRoute.params.forEach((params: Params) => {
        this.time = params['time'];
    });
  }
}
