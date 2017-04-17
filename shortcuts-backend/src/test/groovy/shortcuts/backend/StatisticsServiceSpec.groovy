package shortcuts.backend

import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(StatisticsService)
class StatisticsServiceSpec extends Specification {

    static DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss'

    void "Should calculate average time for given route"() {
        given: 'Trips with duration 2h, 50min & 25min'
        List<Trip> trips = []
        trips << new Trip(startTime: Date.parse(DATE_FORMAT, '2000-01-01 10:00:00'), endTime: Date.parse(DATE_FORMAT, '2000-01-01 12:00:00'))
        trips << new Trip(startTime: Date.parse(DATE_FORMAT, '2000-01-03 13:30:00'), endTime: Date.parse(DATE_FORMAT, '2000-01-03 14:20:00'))
        trips << new Trip(startTime: Date.parse(DATE_FORMAT, '2000-01-02 11:20:00'), endTime: Date.parse(DATE_FORMAT, '2000-01-02 11:45:00'))

        when:
        def result = service.calculateAverageTripTime(trips)

        then: 'Average duration is 1h 5min'
        result.standardHours == 1
        result.standardMinutes == 65
        result.standardSeconds == 3900
    }

}
