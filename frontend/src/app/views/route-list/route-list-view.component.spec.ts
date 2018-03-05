import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { Route } from '../../domain/route';
import { RouteService } from '../../services/route.service';
import { mockRouteService } from '../../utils/test-mocks.spec';

import { RouteListViewComponent } from './route-list-view.component';

describe('RouteListViewComponent', () => {

    let fixture: ComponentFixture<RouteListViewComponent>;
    let component: RouteListViewComponent;

    let routeService: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RouteListViewComponent,
            ],
            providers: [
                { provide: RouteService, useValue: mockRouteService() },
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents().then().catch();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RouteListViewComponent);
        component = fixture.debugElement.componentInstance;

        routeService = fixture.debugElement.injector.get(RouteService);
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {

        const routes = [new Route(), new Route()];

        beforeEach(() => {
            routeService.getRoutes.and.returnValue(Promise.resolve(routes));
        });

        it('should call getRoutes', () => {
            component.ngOnInit();

            expect(routeService.getRoutes).toHaveBeenCalled();
        });

        describe('on getRoutes success', () => {

            it('should save route list', fakeAsync(() => {
                component.ngOnInit();
                tick();

                expect(component.routes).toEqual(routes);
            }));

        });

    });

});
