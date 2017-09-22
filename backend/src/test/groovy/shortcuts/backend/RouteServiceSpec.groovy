package shortcuts.backend

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(RouteService)
@Mock(Route)
class RouteServiceSpec extends Specification {

    def setup() {
        new Route(id: 1, description: 'route 1').save()
    }

    void 'method createRoute should save new the route'() {
        when:
        Route route = service.createRoute(routeJson)

        then:
        route.id == 2L
        route.description == routeJson.description

        where:
        routeJson = [description: 'test']
    }

    void 'getAllRoutes should return all routes'() {
        expect:
        service.allRoutes*.id == [1L]
    }

}
