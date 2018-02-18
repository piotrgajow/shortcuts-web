import { TestMocks } from '../utils/test-mocks.spec';
import { Trip } from '../domain/trip';
import { TripService } from './trip.service';

describe('TripService', () => {

    let service: TripService;

    let backendService;

    beforeEach(() => {
        backendService = TestMocks.mockBackendService();
        service = new TripService(backendService);
    });

    it('saveTrip should use proper backend endpoint', () => {
        const routeId = 19;
        const trip = new Trip();
        const url = `route/${routeId}/trip`;
        const promise = { test: 'promise' };
        backendService.post.and.returnValue(promise);

        const result = service.saveTrip(routeId, trip);

        expect(backendService.post).toHaveBeenCalledWith(url, trip);
        expect(result).toEqual(promise);
    });

});
