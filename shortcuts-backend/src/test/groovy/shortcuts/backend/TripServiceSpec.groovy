package shortcuts.backend

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification
import spock.lang.Unroll

@TestFor(TripService)
@Mock([Trip, DateService, TripPoint])
@Unroll
class TripServiceSpec extends Specification {

    def setupSpec() {
        Route.metaClass.static.get = { Long id ->
            def route = new Route(description: 'Test route')
            route.id = id
            return route
        }
    }

    void 'Should reject trips without path'() {
        when:
        service.createTrip(routeId, tripJson)

        then:
        def exception = thrown TripCreationException
        exception.message == 'Trip requires a specified path'

        where:
        routeId = 1
        tripJson = []
    }

    void 'Should reject trips without route'() {
        when:
        service.createTrip(routeId, tripJson)

        then:
        def exception = thrown TripCreationException
        exception.message == 'Trip requires a specified route'

        where:
        routeId = null
        tripJson = [path: [[latitude: 0, longitude: 0, time: '2000-01-01T20:30:00Z']]]
    }

    void 'Should assign trip to proper route'() {
        when:
        Trip result = service.createTrip(routeId, tripJson)

        then:
        result.route.id == routeId

        where:
        routeId = 1L
        tripJson = [path: [[latitude: 0, longitude: 0, time: '2000-01-01T20:30:00Z']]]
    }

    void 'Should extract trip start time from path'() {
        when:
        Trip result = service.createTrip(routeId, tripJson)

        then:
        result.startTime == new Date().parse('yyyy-MM-dd HH:mm:ss', expectedStartTime)

        where:
        routeId = 1
        expectedStartTime | tripJson
        '2000-01-01 20:30:00' | [path: [[latitude: 0, longitude: 0, time: '2000-01-01T20:30:00Z']]]
        '2000-01-01 21:30:00' | [path: [[latitude: 0, longitude: 0, time: '2000-01-01T21:30:00Z'], [latitude: 1, longitude: 0, time: '2000-01-01T22:00:00Z']]]
    }

    void 'Should extract trip end time from path'() {
        when:
        Trip result = service.createTrip(routeId, tripJson)

        then:
        result.endTime == new Date().parse('yyyy-MM-dd HH:mm:ss', expectedEndTime)

        where:
        routeId = 1
        expectedEndTime | tripJson
        '2000-01-01 20:30:00' | [path: [[latitude: 0, longitude: 0, time: '2000-01-01T20:30:00Z']]]
        '2000-01-01 22:00:00' | [path: [[latitude: 0, longitude: 0, time: '2000-01-01T21:30:00Z'], [latitude: 1, longitude: 0, time: '2000-01-01T22:00:00Z']]]
    }

    void 'Should persist path points'() {
        when:
        Trip result = service.createTrip(routeId, tripJson)

        then:
        result.path.size() == tripJson.path.size()

        where:
        routeId = 1
        tripJson = [path: [[latitude: 0, longitude: 0, time: '2000-01-01T21:30:00Z'], [latitude: 1, longitude: 0, time: '2000-01-01T22:00:00Z']]]
    }

}
