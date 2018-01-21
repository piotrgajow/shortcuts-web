import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { BackendConfig } from '../config/backend-config';
import { Route } from '../domain/route';

@Injectable()
export class RouteService {

    constructor(
        private http: HttpClient,
    ) {}

    getRoutes(): Promise<any> {
        return this.http.get(`${BackendConfig.BASE_URL}/route`).toPromise();
    }

    saveRoute(route: Route): Promise<any> {
        return this.http.post(`${BackendConfig.BASE_URL}/route`, route).toPromise();
    }

}
