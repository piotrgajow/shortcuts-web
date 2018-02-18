import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';

import { RouteSelectionViewComponent } from './route-selection-view.component';
import { Router } from '@angular/router';
import { RouteService } from '../../services/route.service';
import { TripService } from '../../services/trip.service';
import { TestMocks } from '../../utils/test-mocks.spec';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TimePipe } from '../../pipes/time.pipe';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route } from '../../domain/route';
import { Trip } from '../../domain/trip';

describe('RouteSelectionViewComponent', () => {

    let fixture: ComponentFixture<RouteSelectionViewComponent>;
    let component: RouteSelectionViewComponent;

    let router;
    let routeService;
    let tripService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
            declarations: [
                RouteSelectionViewComponent,
                TimePipe,
            ],
            imports: [
                ReactiveFormsModule,
            ],
            providers: [
                { provide: Router, useValue: TestMocks.mockRouter() },
                { provide: RouteService, useValue: TestMocks.mockRouteService() },
                { provide: TripService, useValue: TestMocks.mockTripService() },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RouteSelectionViewComponent);
        component = fixture.debugElement.componentInstance;
        router = fixture.debugElement.injector.get(Router);
        routeService = fixture.debugElement.injector.get(RouteService);
        tripService = fixture.debugElement.injector.get(TripService);
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize the form', () => {
        expect(component.newRouteForm).toBeDefined();
        expect(component.newRouteForm.controls['description']).toBeDefined();
    });

    describe('ngOnInit', () => {

        const routes = [new Route()];

        beforeEach(() => {
            routeService.getRoutes.and.returnValue(Promise.resolve(routes));
        });

        it('should set tip based on tripService.currentTrip', () => {
            const trip = { test: 'trip' };
            tripService['currentTrip'] = trip;

            component.ngOnInit();

            expect(component.trip).toEqual(trip);
        });

        it('should call routeService.getRoutes', () => {
            component.ngOnInit();

            expect(routeService.getRoutes).toHaveBeenCalled();
        });

        describe('on getRoutes success', () => {

            it('should save routes', fakeAsync(() => {
                component.ngOnInit();
                tick();

                expect(component.routes).toEqual(routes);
            }));

        });

    });

    describe('selectRoute', () => {

        const route = new Route();

        it('should save selected route', () => {
            component.selectedRoute = null;

            component.selectRoute(route);

            expect(component.selectedRoute).toEqual(route);
        });

    });

    describe('confirmSelection', () => {

        const routeId = 19;
        const trip = new Trip();

        beforeEach(() => {
            component.selectedRoute = new Route();
            component.selectedRoute.id = routeId;
            component.trip = trip;
            tripService.saveTrip.and.returnValue(Promise.resolve({}));
        });

        it('should call tripService.saveTrip', () => {
            component.confirmSelection();

            expect(tripService.saveTrip).toHaveBeenCalledWith(routeId, trip);
        });

        describe('on saveTrip success', () => {

            it('should redirect to home view', fakeAsync(() => {
                component.confirmSelection();
                tick();

                expect(router.navigateByUrl).toHaveBeenCalledWith('');
            }));
        });

    });

    describe('addRoute', () => {

        const description = 'Test description';
        const routeData = { description };
        const newRoute = new Route({ id: 19, description });

        beforeEach(() => {
            component.newRouteForm.controls['description'].setValue(routeData.description);
            routeService.saveRoute.and.returnValue(Promise.resolve(newRoute));
        });

        it('should call routeService.saveRoute', () => {
            component.addRoute();

            expect(routeService.saveRoute).toHaveBeenCalledWith(routeData);
        });

        describe('on saveRoute success', () => {

            it('should reset the form', fakeAsync(() => {
                spyOn(component.newRouteForm, 'reset');

                component.addRoute();
                tick();

                expect(component.newRouteForm.reset).toHaveBeenCalled();
            }));

            it('should add saved route to route list', fakeAsync(() => {
                component.routes = [];

                component.addRoute();
                tick();

                expect(component.routes).toContain(newRoute);
            }));

        });

    });

});
