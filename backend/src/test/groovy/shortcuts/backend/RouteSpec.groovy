package shortcuts.backend

import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(Route)
class RouteSpec extends Specification {

    void 'should contain description'() {
        when:
        Route route = new Route(description: 'validDescription')

        then:
        route.description == 'validDescription'
    }

}
