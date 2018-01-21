package shortcuts.backend

import commands.CreateTripCommand
import grails.buildtestdata.mixin.Build
import grails.test.mixin.TestFor
import shortcuts.backend.exceptions.RouteNotFound
import spock.lang.Specification
import spock.lang.Unroll

@TestFor(TripService)
@Build([Route, Trip])
class TripServiceSpec extends Specification {

    Route route
    String localDateTimeString = '2000-01-01T00:00:00.000Z'

    def setup() {
        route = Route.build(description: 'test')
    }

    @Unroll
    void 'Should reject trips without route'() {
        given:
        CreateTripCommand command = new CreateTripCommand(routeId: routeId, startTime: localDateTimeString, duration: 0)

        when:
        service.createTrip(command)

        then:
        thrown RouteNotFound

        where:
        routeId | _
        null    | _
        5       | _
    }

    void 'Should assign trip to proper route'() {
        given:
        CreateTripCommand command = new CreateTripCommand(routeId: route.id, startTime: localDateTimeString, duration: 0)

        when:
        Trip result = service.createTrip(command)

        then:
        result.route.id == route.id
    }

}
