import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class BackendService {

    private static readonly BASE_URL = environment.backendBaseUrl;

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
