import { Route } from '@angular/router';

import { routes } from './app-routing.module';

describe('Url routing', () => {

    it('Default view should use /routes url', () => {
        const route = getRoute('');
        expect(route.redirectTo).toBe('/routes');
        expect(route.pathMatch).toBe('full');
    });

    [
        { url: 'newTrip/:startTime', componentName: 'TripViewComponent' },
        { url: 'selectRoute', componentName: 'RouteSelectionViewComponent' },
        { url: 'routes', componentName: 'RouteListViewComponent' },
    ].forEach((testCase) => {

        it(`should map /${testCase.url} url to ${testCase.componentName}`, () => {
            const route = getRoute(testCase.url);
            expect(route.component && route.component.name).toBe(testCase.componentName);
        });

    });

    function getRoute(url: string): Route {
        const route = routes.find((it) => it.path === url);

        return route ? route : {};
    }

});
