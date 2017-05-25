import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Trip } from './trip';

@Injectable()
export class TripService {
    currentTrip: Trip;

    constructor(
        private http: Http,
    ) {}

    saveTrip(routeId: number, trip: Trip): Promise<Trip> {
        return this.http.post(`http://localhost:8080/route/${routeId}/trip`, trip).toPromise().then(response => response.json() as Trip);
    }
    
}
