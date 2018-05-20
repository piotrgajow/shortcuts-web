import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocalDateTime } from 'js-joda';

import { Trip } from '../../domain/trip';
import { TimePipe } from '../../pipes/time.pipe';
import { TripService } from '../../services/trip.service';
import { mockActivatedRoute, mockRouter, mockTripService } from '../../utils/test-mocks.spec';

import { TripViewComponent } from './trip-view.component';

const ONE_SECOND_MS = 1000;
const ONE_SECOND = 1;
const TWO_SECONDS = 2;

describe('TripViewComponent', () => {

    let fixture: ComponentFixture<TripViewComponent>;
    let component: TripViewComponent;

    let router: any;
    let tripService: any;
    let activatedRoute: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TripViewComponent,
                TimePipe,
            ],
            providers: [
                { provide: Router, useValue: mockRouter() },
                { provide: TripService, useValue: mockTripService() },
                { provide: ActivatedRoute, useValue: mockActivatedRoute() },
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents().then().catch();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TripViewComponent);
        component = fixture.debugElement.componentInstance;
        router = fixture.debugElement.injector.get(Router);
        tripService = fixture.debugElement.injector.get(TripService);
        activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize constants', () => {
        expect(TripViewComponent.TIMER_DELAY).toEqual(0);
        expect(TripViewComponent.TIMER_INTERVAL).toEqual(ONE_SECOND_MS);
    });

    describe('ngOnInit', () => {

        const startTime = LocalDateTime.now();

        beforeEach(() => {
            activatedRoute.params = Observable.of({ startTime: startTime.toString() });
        });

        it('should initialize the trip', fakeAsync(() => {
            component.ngOnInit();
            tick();

            expect(component.trip).toBeDefined();
            expect(component.trip.startTime).toEqual(startTime);
            discardPeriodicTasks();
        }));

        it('should set timer', fakeAsync(() => {
            component.ngOnInit();
            tick();

            expect(component.timerSubscription).toBeDefined();
            discardPeriodicTasks();
        }));

    });

    describe('finalize', () => {

        const trip = new Trip();

        beforeEach(() => {
            component.trip = trip;
            router.navigateByUrl.and.returnValue(Promise.resolve({}));
        });

        it('should save trip in tripService', () => {
            component.finalize();

            expect(tripService.currentTrip).toEqual(trip);
        });

        it('should redirect to select route view', () => {
            component.finalize();

            expect(router.navigateByUrl).toHaveBeenCalledWith('/selectRoute');
        });

    });

    describe('ngOnDestroy', () => {

        it('should unsubscribe timer', () => {
            component.timerSubscription = jasmine.createSpyObj('Subscription', ['unsubscribe']);

            component.ngOnDestroy();

            expect(component.timerSubscription.unsubscribe).toHaveBeenCalled();
        });

    });

});
