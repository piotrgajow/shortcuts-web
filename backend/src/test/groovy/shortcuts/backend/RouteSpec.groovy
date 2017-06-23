package shortcuts.backend

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(Route)
class RouteSpec extends Specification {

    void 'should contain description'() {
        when:
        Route route = new Route(description: 'validDescription')

        then:
        route.description == 'validDescription'
    }

}
