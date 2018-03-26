package shortcuts.backend

import grails.buildtestdata.mixin.Build
import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(RouteService)
@Build(Route)
class RouteServiceSpec extends Specification {

    def setup() {
        Route.build(description: 'route 1')
    }

    void 'method createRoute should save new the route'() {
        when:
        Route route = service.createRoute(routeJson)

        then:
        route.id == 2L
        route.description == routeJson.description

        where:
        routeJson = [description: 'test', locationFrom: 'origin', locationTo: 'destination']
    }

    void 'getAllRoutes should return all routes'() {
        expect:
        service.allRoutes*.id == [1L]
    }

}
