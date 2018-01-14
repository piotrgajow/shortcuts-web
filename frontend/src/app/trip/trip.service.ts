import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BackendConfig } from '../shared/backend-config';
import { Trip } from './trip';

@Injectable()
export class TripService {
    currentTrip: Trip = new Trip();

    constructor(
        private http: Http,
    ) {}

    saveTrip(routeId: number, trip: Trip): Promise<Trip> {
        const url = `${BackendConfig.BASE_URL}/route/${routeId}/trip`
        return this.http.post(url, trip).toPromise()
            .then(response => response.json() as Trip);
    }

}
