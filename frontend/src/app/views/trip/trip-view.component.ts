import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Duration, LocalDateTime } from 'js-joda';
import { Subscription, timer } from 'rxjs/index';

import { Trip } from '../../domain/trip';
import { TripService } from '../../services/trip.service';

@Component({
    templateUrl: './trip-view.component.html',
})
export class TripViewComponent implements OnInit, OnDestroy {
    static readonly TIMER_DELAY = 0;
    static readonly TIMER_INTERVAL = 1000;

    trip!: Trip;
    timerSubscription!: Subscription;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
        private readonly tripService: TripService,
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
            this.trip = new Trip();
            this.trip.startTime = LocalDateTime.parse(params.startTime);
            this.trip.duration = 0;
            const clock = timer(TripViewComponent.TIMER_DELAY, TripViewComponent.TIMER_INTERVAL);
            this.timerSubscription = clock.subscribe(() => {
                this.trip.duration = Duration.between(this.trip.startTime, LocalDateTime.now()).seconds();
            });
        });
    }

    finalize(): void {
        this.tripService.currentTrip = this.trip;
        this.router.navigateByUrl('/selectRoute')
            .then()
            .catch();
    }

    ngOnDestroy(): void {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }

}
