import { Trip } from '../domain/trip';
export function mockRouter(): any {
    return jasmine.createSpyObj('Router', ['navigateByUrl']);
}

export function mockBackendService(): any {
    return jasmine.createSpyObj('BackendService', ['get', 'post']);
}

export function mockRouteService(): any {
    return jasmine.createSpyObj('RouteService', ['getRoutes', 'saveRoute']);
}

export function mockTripService(trip: Trip): any {
    const service = jasmine.createSpyObj('TripService', ['saveTrip']);
    service.currentTrip = trip;

    return service;
}
