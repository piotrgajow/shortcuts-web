import { Injectable } from '@angular/core';

import { Route } from './route';

const routes = [];
let route = new Route();
route.id = 1;
route.description = 'Test route';
routes.push(route);

@Injectable()
export class RouteService {

    getRoutes(): Promise<Route[]> {
        return Promise.resolve(routes);
    }

}
