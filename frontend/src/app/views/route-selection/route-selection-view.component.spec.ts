import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Route } from '../../domain/route';
import { Trip } from '../../domain/trip';
import { TimePipe } from '../../pipes/time.pipe';
import { RouteService } from '../../services/route.service';
import { TripService } from '../../services/trip.service';
import { mockRouter, mockRouteService, mockTripService } from '../../utils/test-mocks.spec';

import { RouteSelectionViewComponent } from './route-selection-view.component';

describe('RouteSelectionViewComponent', () => {

    let fixture: ComponentFixture<RouteSelectionViewComponent>;
    let component: RouteSelectionViewComponent;

    let router: any;
    let routeService: any;
    let tripService: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RouteSelectionViewComponent,
                TimePipe,
            ],
            imports: [
                ReactiveFormsModule,
            ],
            providers: [
                { provide: Router, useValue: mockRouter() },
                { provide: RouteService, useValue: mockRouteService() },
                { provide: TripService, useValue: mockTripService() },
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents().then().catch();
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
        expect(component.newRouteForm.get('description')).toBeDefined();
    });

    describe('ngOnInit', () => {

        const routes = [new Route()];

        beforeEach(() => {
            routeService.getRoutes.and.returnValue(Promise.resolve(routes));
        });

        it('should set tip based on tripService.currentTrip', () => {
            const trip = { test: 'trip' };
            tripService.currentTrip = trip;

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

        const route = new Route({ id: 1 });

        it('should save selected route', () => {
            component.selectedRoute = new Route({ id: 3 });

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
        const locationFrom = 'Origin';
        const locationTo = 'Destination';
        const routeData = { locationFrom, locationTo, description };
        const newRoute = new Route({ id: 19, locationFrom, locationTo, description });

        beforeEach(() => {
            component.newRouteForm.patchValue(routeData);
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
