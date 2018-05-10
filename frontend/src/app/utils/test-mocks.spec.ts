import { Observable } from 'rxjs/Observable';

export function mockRouter(): any {
    return jasmine.createSpyObj('Router', ['navigateByUrl', 'navigate']);
}

export function mockBackendService(): any {
    return jasmine.createSpyObj('BackendService', ['get', 'post']);
}

export function mockRouteService(): any {
    return jasmine.createSpyObj('RouteService', ['getRoutes', 'saveRoute']);
}

export function mockTripService(): any {
    return jasmine.createSpyObj('TripService', ['saveTrip']);
}

export function mockActivatedRoute(): any {
    return {
        params: Observable.of({}),
    };
}
