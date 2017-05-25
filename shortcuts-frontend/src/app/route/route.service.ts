import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Route } from './route';

@Injectable()
export class RouteService {

    constructor(
        private http: Http,
    ) {}

    getRoutes(): Promise<Route[]> {
        return this.http.get('http://localhost:8080/route').toPromise().then(response => {
            console.log(response);
            return response.json() as Route[];
        });
    }

    saveRoute(route: Route): Promise<Route> {
        return this.http.post('http://localhost:8080/route', route).toPromise().then(response => {
            console.log(response);
            return response.json() as Route;
        });
    }

}
