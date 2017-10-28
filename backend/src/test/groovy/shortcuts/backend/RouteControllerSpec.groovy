package shortcuts.backend

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification
import spock.lang.Unroll

@TestFor(RouteController)
@Mock(RouteService)
class RouteControllerSpec extends Specification {

    @Unroll
    void '#controllerMethod should call #serviceMethod'() {
        given:
        controller.routeService = Mock(RouteService)

        when:
        controller."${controllerMethod}"()

        then:
        1 * controller."${service}"."${serviceMethod}"(*_) >> serviceResult

        where:
        controllerMethod | service        | serviceMethod  | serviceResult
        'index'          | 'routeService' | 'getAllRoutes' | []
        'save'           | 'routeService' | 'createRoute'  | [:]
    }

}
