import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Trip } from './trip';
import { TripService } from './trip.service';
import { LocalDateTime } from 'js-joda';

@Component({
    templateUrl: './trip.component.html'
})
export class TripComponent {
    trip: Trip;

    constructor(
        private router: Router,
        private tripService: TripService,
    ) {
        this.trip = new Trip();
        this.trip.startTime = LocalDateTime.now();
        this.trip.time = 0;
    }

    finalize(): void {
        this.tripService.currentTrip = this.trip;
        this.router.navigateByUrl('/selectRoute');
    }

}
