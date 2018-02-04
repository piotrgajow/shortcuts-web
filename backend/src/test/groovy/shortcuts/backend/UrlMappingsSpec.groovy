package shortcuts.backend

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(UrlMappings)
@Mock([RouteController])
class UrlMappingsSpec extends Specification {

    void 'Test url mappings for route controller'() {
        expect:
        assertUrlMapping([controller: 'route', action: 'index', method: 'GET'], '/route')
        assertUrlMapping([controller: 'route', action: 'save', method: 'POST'], '/route')
    }

}
