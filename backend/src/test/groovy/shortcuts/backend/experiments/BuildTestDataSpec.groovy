package shortcuts.backend.experiments

import grails.buildtestdata.mixin.Build
import shortcuts.backend.Route
import shortcuts.backend.Trip
import spock.lang.Specification

@Build([Trip, Route])
class BuildTestDataSpec extends Specification {

    void 'check building Route with default data'() {
        when:
        Route.build()

        then:
        Route.count() == 1
    }

    void 'check building Trip should also persist Route'() {
        when:
        Trip.build()

        then:
        Trip.count() == 1
        Route.count() == 1
    }

    void 'check building Route with custom properties'() {
        when:
        def route = Route.build(description: 'test description')

        then:
        Route.count() == 1
        Trip.count() == 0
        route.description == 'test description'
    }

    void 'check building Trip with custom nestested object'() {
        when:
        def trip = Trip.build(route: Route.build(description: 'test description'))

        then:
        Route.count() == 1
        Trip.count() == 1
        trip.route.description == 'test description'
    }

}
