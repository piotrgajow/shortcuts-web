import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

const BASE_URL = environment.backendBaseUrl;

@Injectable()
export class BackendService {

    constructor(
        private readonly httpClient: HttpClient,
    ) {}

    async get(endpointUrl: string): Promise<any> {
        const url = fullUrl(endpointUrl);

        return this.httpClient.get(url)
            .toPromise()
            .catch(handleError);
    }

    async post(endpointUrl: string, body: any): Promise<any> {
        const url = fullUrl(endpointUrl);

        return this.httpClient.post(url, body)
            .toPromise()
            .catch(handleError);
    }

}

function fullUrl(endpointUrl: string): string {
    return `${BASE_URL}/${endpointUrl}`;
}

function handleError(error: Error): void {
    // tslint:disable-next-line:no-console
    console.error(error);

    throw error;
}
