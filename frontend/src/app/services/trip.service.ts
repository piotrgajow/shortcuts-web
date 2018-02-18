import { Injectable } from '@angular/core';

import { Trip } from '../domain/trip';
import { BackendService } from './backend.service';

@Injectable()
export class TripService {

    currentTrip: Trip = new Trip();

    constructor(
        private backendService: BackendService,
    ) {}

    saveTrip(routeId: number, trip: Trip): Promise<any> {
        const url = `route/${routeId}/trip`;
        return this.backendService.post(url, trip);
    }

}
