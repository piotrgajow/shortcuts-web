import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { BackendConfig } from '../config/backend-config';
import { Trip } from '../domain/trip';

@Injectable()
export class TripService {
    currentTrip: Trip = new Trip();

    constructor(
        private http: HttpClient,
    ) {}

    saveTrip(routeId: number, trip: Trip): Promise<any> {
        const url = `${BackendConfig.BASE_URL}/route/${routeId}/trip`;
        return this.http.post(url, trip).toPromise();
    }

}
