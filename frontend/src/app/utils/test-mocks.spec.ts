export class TestMocks {

    static mockBackendService() {
        return jasmine.createSpyObj('BackendService', ['get', 'post']);
    }

    static mockRouteService() {
        return jasmine.createSpyObj('RouteService', ['getRoutes']);
    }

}
