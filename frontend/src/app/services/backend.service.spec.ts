import { BackendService } from './backend.service';

describe('BackendService', () => {

    let subject: BackendService;

    let httpClient;

    const mockPromise = { test: 'promise' };
    const mockHttpResponse = { toPromise: () => mockPromise };

    beforeEach(() => {
        httpClient = jasmine.createSpyObj('HttpClient', ['get', 'post']);
        subject = new BackendService(httpClient);
    });

    describe('get', () => {

        it('should send get request to backend and return promise', () => {
            const url = 'endpoint/url/1';
            const fullUrl = `http://localhost:8080/${url}`;
            httpClient.get.and.returnValue(mockHttpResponse);

            const result = subject.get(url);

            expect(httpClient.get).toHaveBeenCalledWith(fullUrl);
            expect(result).toEqual(mockPromise);
        });

    });

    describe('post', () => {

        it('should send post request to backend and return promise', () => {
            const url = 'endpoint/url/2';
            const body = { test: { body: { json: 'Lorem ipsum...' } } };
            const fullUrl = `http://localhost:8080/${url}`;
            httpClient.post.and.returnValue(mockHttpResponse);

            const result = subject.post(url, body);

            expect(httpClient.post).toHaveBeenCalledWith(fullUrl, body);
            expect(result).toEqual(mockPromise);
        });

    });

});
