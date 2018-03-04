import { TestBed, ComponentFixture, async, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TripViewComponent } from './trip-view.component';
import { LocalDateTime } from 'js-joda';
import { TimePipe } from '../../pipes/time.pipe';
import { mockRouter, mockTripService } from '../../utils/test-mocks.spec';
import { Router } from '@angular/router';
import { TripService } from '../../services/trip.service';
import { Trip } from '../../domain/trip';

describe('TripViewComponent', () => {

    let fixture: ComponentFixture<TripViewComponent>;
    let component: TripViewComponent;

    let router: any;
    let tripService: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
            declarations: [
                TripViewComponent,
                TimePipe,
            ],
            providers: [
                { provide: Router, useValue: mockRouter() },
                { provide: TripService, useValue: mockTripService() },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TripViewComponent);
        component = fixture.debugElement.componentInstance;
        router = fixture.debugElement.injector.get(Router);
        tripService =  fixture.debugElement.injector.get(TripService);
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize constants', () => {
        expect(TripViewComponent.TIMER_DELAY).toEqual(0);
        expect(TripViewComponent.TIMER_INTERVAL).toEqual(1000);
    });

    it('should initialize trip', () => {
        expect(component.trip).toBeDefined();
        expect(component.trip.startTime.withNano(0)).toEqual(LocalDateTime.now().withNano(0));
        expect(component.trip.duration).toEqual(0);
    });

    describe('ngOnInit', () => {

        it('should set timer', fakeAsync(() => {
            component.ngOnInit();

            expect(component.timerSubscription).toBeDefined();
            tick(1000);
            expect(component.trip.duration).toEqual(1);
            tick(1000);
            expect(component.trip.duration).toEqual(2);
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
