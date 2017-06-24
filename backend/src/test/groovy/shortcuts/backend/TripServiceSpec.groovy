package shortcuts.backend

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification
import spock.lang.Unroll

@TestFor(TripService)
@Mock([Route, Trip, DateService])
class TripServiceSpec extends Specification {

    def setup() {
        new Route(id: 1, description: 'test').save()
    }

    @Unroll
    void 'Should reject trips without route'() {
        when:
        service.createTrip(routeId, tripJson)

        then:
        def exception = thrown TripCreationException
        exception.message == 'Trip requires a specified route'

        where:
        routeId | tripJson
        null    | [:]
        5       | [:]
    }

    void 'Should assign trip to proper route'() {
        when:
        Trip result = service.createTrip(routeId, tripJson)

        then:
        result.route.id == routeId

        where:
        routeId = 1L
        tripJson = [startTime: new Date(), duration: 5]
    }

}
