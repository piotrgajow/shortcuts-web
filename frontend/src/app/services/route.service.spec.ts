import { RouteService } from './route.service';
import { Route } from '../domain/route';

describe('RouteService', () => {

    let subject: RouteService;

    let backendService;

    beforeEach(() => {
        backendService = jasmine.createSpyObj('BackendService', ['get', 'post']);
        subject = new RouteService(backendService);
    });

    it('getRoutes should use proper endpoint', () => {
        const url = 'route';
        const promise = { test: 'promise' };
        backendService.get.and.returnValue(promise);

        const result = subject.getRoutes();

        expect(backendService.get).toHaveBeenCalledWith(url);
        expect(result).toEqual(promise);
    });

    it('saveRoute should use proper endpoint', () => {
        const url = 'route';
        const promise = { test: 'promise' };
        const route = new Route();
        backendService.post.and.returnValue(promise);

        const result = subject.saveRoute(route);

        expect(backendService.post).toHaveBeenCalledWith(url, route);
        expect(result).toEqual(promise);
    });

});
