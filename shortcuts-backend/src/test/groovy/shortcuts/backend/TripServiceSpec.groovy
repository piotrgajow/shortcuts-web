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
        tripJson = [path: createPathJson([0, 0, '2000-01-01T20:30:00Z'])]
    }

    void 'Should assign trip to proper route'() {
        when:
        Trip result = service.createTrip(routeId, tripJson)

        then:
        result.route.id == routeId

        where:
        routeId = 1L
        tripJson = [path: createPathJson([0, 0, '2000-01-01T20:30:00Z'])]
    }

    void 'Should extract trip start time from path'() {
        when:
        Trip result = service.createTrip(routeId, tripJson)

        then:
        result.startTime == new Date().parse('yyyy-MM-dd HH:mm:ss', expectedStartTime)

        where:
        expectedStartTime     | tripJson
        '2000-01-01 20:30:00' | [path: createPathJson([0, 0, '2000-01-01T20:30:00Z'])]
        '2000-01-01 21:30:00' | [path: createPathJson([0, 0, '2000-01-01T21:30:00Z'], [1, 0, '2000-01-01T22:00:00Z'])]

        routeId = 1
    }

    void 'Should extract trip end time from path'() {
        when:
        Trip result = service.createTrip(routeId, tripJson)

        then:
        result.endTime == new Date().parse('yyyy-MM-dd HH:mm:ss', expectedEndTime)

        where:
        expectedEndTime       | tripJson
        '2000-01-01 20:30:00' | [path: createPathJson([0, 0, '2000-01-01T20:30:00Z'])]
        '2000-01-01 22:00:00' | [path: createPathJson([0, 0, '2000-01-01T21:30:00Z'], [1, 0, '2000-01-01T22:00:00Z'])]

        routeId = 1
    }

    void 'Should persist path points'() {
        when:
        Trip result = service.createTrip(routeId, tripJson)

        then:
        result.path.size() == tripJson.path.size()

        where:
        routeId = 1
        tripJson = [path: createPathJson([0, 0, '2000-01-01T21:30:00Z'], [1, 0, '2000-01-01T22:00:00Z'])]
    }

    private static def createPathJson(... points) {
        return points.collect {
            def (latitude, longitude, time) = it
            return [latitude: latitude, longitude: longitude, time: time]
        }
    }

}
