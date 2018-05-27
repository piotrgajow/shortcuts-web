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
        Map controllerAction = [controller: controllerName, action: actionName]
        Closure parameterAssertions = createParamAssertions(expectedParameterValues)

        expect:
        assertForwardUrlMapping(controllerAction, url, parameterAssertions)

        where:
        url              | method | controllerName | actionName | expectedParameterValues
        '/route'         | 'GET'  | 'route'        | 'index'    | [:]
        '/route'         | 'POST' | 'route'        | 'save'     | [:]
        '/route/15/trip' | 'POST' | 'trip'         | 'save'     | [routeId: 15]
    }

    private static Closure createParamAssertions(Map expectedParameterValues) {
        return {
            expectedParameterValues.each { parameterName, expectedValue ->
                delegate."${parameterName}" = "${expectedValue}"
            }
        }
    }

}
