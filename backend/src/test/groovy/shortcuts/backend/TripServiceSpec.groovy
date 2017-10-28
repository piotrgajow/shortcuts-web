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

    def setup() {
        Route.build(description: 'test')
    }

    @Unroll
    void 'Should reject trips without route'() {
        given:
        CreateTripCommand command = new CreateTripCommand(routeId: routeId, startTime: '2000-01-01 00:00:00', duration: 0)

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
        CreateTripCommand command = new CreateTripCommand(routeId: 1L, startTime: '2000-01-01 00:00:00', duration: 0)

        when:
        Trip result = service.createTrip(command)

        then:
        result.route.id == 1L
    }

}
