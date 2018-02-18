import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouteListViewComponent } from './route-list-view.component';
import { RouteService } from '../../services/route.service';
import { TestMocks } from '../../utils/test-mocks.spec';
import { Route } from '../../domain/route';

describe('RouteListViewComponent', () => {

    let fixture: ComponentFixture<RouteListViewComponent>;
    let component: RouteListViewComponent;

    let routeService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
            declarations: [
                RouteListViewComponent,
            ],
            providers: [
                { provide: RouteService, useValue: TestMocks.mockRouteService() },
            ],
        }).compileComponents();
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
