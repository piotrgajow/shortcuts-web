package shortcuts.backend

import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(StatisticsService)
class StatisticsServiceSpec extends Specification {

    static DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss'

    void "Should calculate average time for given route"() {
        given: 'Trips with duration 2h, 50min & 25min'
        def trips = prepareTrips()

        when:
        def result = service.calculateAverageTripTime(trips)

        then: 'Average duration is 1h 5min'
        result.standardHours == 1
        result.standardMinutes == 65
        result.standardSeconds == 3900
    }

    void "Should find fastest trip"() {
        given: 'Trips with duration 2h, 50min & 25min'
        def trips = prepareTrips()

        when:
        def result = service.findShortestPath(trips)

        then: 'Finds the one with 25 minute duration'
        result.id == 3L
    }

    private static List<Trip> prepareTrips() {
        List<Trip> trips = []
        trips << createTrip(1, '2000-01-01 10:00:00', '2000-01-01 12:00:00')
        trips << createTrip(2, '2000-01-03 13:30:00', '2000-01-03 14:20:00')
        trips << createTrip(3, '2000-01-02 11:20:00', '2000-01-02 11:45:00')
        return trips
    }

    private static Trip createTrip(Long id, String startTime, String endTime) {
        Trip trip = new Trip(startTime: Date.parse(DATE_FORMAT, startTime), endTime: Date.parse(DATE_FORMAT, endTime))
        trip.id = id
        return trip;
    }


}
