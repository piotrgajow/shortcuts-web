import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BackendConfig } from '../config/backend-config';
import { Route } from '../domain/route';

@Injectable()
export class RouteService {

    constructor(
        private http: Http,
    ) {}

    getRoutes(): Promise<Route[]> {
        return this.http.get(`${BackendConfig.BASE_URL}/route`).toPromise().then(response => response.json() as Route[]);
    }

    saveRoute(route: Route): Promise<Route> {
        return this.http.post(`${BackendConfig.BASE_URL}/route`, route).toPromise().then(response => response.json() as Route);
    }

}
