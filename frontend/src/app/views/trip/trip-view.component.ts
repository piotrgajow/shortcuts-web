import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { Trip } from '../../domain/trip';
import { TripService } from '../../services/trip.service';

@Component({
    templateUrl: './trip-view.component.html'
})
export class TripViewComponent implements OnInit, OnDestroy {
    static readonly TIMER_DELAY = 0;
    static readonly TIMER_INTERVAL = 1000;

    trip: Trip;
    timerSubscription: Subscription;

    constructor(
        private router: Router,
        private tripService: TripService,
    ) {
        this.trip = new Trip();
        this.trip.startTime = new Date();
        this.trip.time = 0;
    }

    ngOnInit(): void {
        const timer = Observable.timer(TripViewComponent.TIMER_DELAY, TripViewComponent.TIMER_INTERVAL);
        this.timerSubscription = timer.subscribe(t => {
            this.trip.time = t;
        });
    }

    finalize(): void {
        this.tripService.currentTrip = this.trip;
        this.router.navigateByUrl('/selectRoute').then();
    }

    ngOnDestroy(): void {
        this.timerSubscription.unsubscribe();
    }

}
