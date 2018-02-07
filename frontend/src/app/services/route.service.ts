import { Injectable } from '@angular/core';

import { Route } from '../domain/route';
import { BackendService } from './backend.service';

@Injectable()
export class RouteService {

    constructor(
        private backendService: BackendService,
    ) {}

    getRoutes(): Promise<any> {
        return this.backendService.get('route');
    }

    saveRoute(route: Route): Promise<any> {
        return this.backendService.post('route', route);
    }

}
