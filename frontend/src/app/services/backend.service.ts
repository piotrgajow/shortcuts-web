import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BackendService {

    private static readonly BASE_URL = 'http://localhost:8080';

    constructor(
        private readonly httpClient: HttpClient,
    ) {}

    get(endpointUrl: string): Promise<any> {
        return this.httpClient.get(BackendService.fullUrl(endpointUrl)).toPromise();
    }

    post(endpointUrl: string, body: any): Promise<any> {
        return this.httpClient.post(BackendService.fullUrl(endpointUrl), body).toPromise();
    }

    private static fullUrl(endpointUrl: string): string {
        return `${BackendService.BASE_URL}/${endpointUrl}`;
    }

}
