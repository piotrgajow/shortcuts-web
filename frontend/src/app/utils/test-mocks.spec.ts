export function mockRouter(): any {
    return jasmine.createSpyObj('Router', ['navigateByUrl']);
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
