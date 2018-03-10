package shortcuts.backend

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification
import spock.lang.Unroll

@TestFor(UrlMappings)
@Mock([RouteController, TripController])
class UrlMappingsSpec extends Specification {

    @Unroll
    void 'Test url mappings for route controller'() {
        given:
        request.method = method

        expect:
        assertForwardUrlMapping([controller: controllerName, action: actionName, method: method], url, parameters)

        where:
        url              | method | controllerName | actionName | parameters
        '/route'         | 'GET'  | 'route'        | 'index'    | { }
        '/route'         | 'POST' | 'route'        | 'save'     | { }
        '/route/15/trip' | 'POST' | 'trip'         | 'save'     | { routeId = '15' }
    }

}
