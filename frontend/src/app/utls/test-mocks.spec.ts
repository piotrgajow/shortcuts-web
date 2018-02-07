export class TestMocks {

    static mockBackendService() {
        return jasmine.createSpyObj('BackendService', ['get', 'post']);
    }

}
