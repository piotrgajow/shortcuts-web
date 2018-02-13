export class TestMocks {

    static mockRouter() {
        return jasmine.createSpyObj('Router', ['navigateByUrl']);
    }

    static mockBackendService() {
        return jasmine.createSpyObj('BackendService', ['get', 'post']);
    }

    static mockRouteService() {
        return jasmine.createSpyObj('RouteService', ['getRoutes', 'saveRoute']);
    }

    static mockTripService() {
        return jasmine.createSpyObj('TripService', ['saveTrip']);
    }

}
