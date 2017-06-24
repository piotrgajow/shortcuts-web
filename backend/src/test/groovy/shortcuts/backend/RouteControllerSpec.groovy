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
        1 * controller.routeService."${serviceMethod}"(*_)

        where:
        controllerMethod | serviceMethod
        'index'          | 'getAllRoutes'
        'save'           | 'createRoute'
    }

    @Unroll
    void 'Should handle exceptions during #controllerMethod'() {
        given:
        controller.routeService = Mock(RouteService)
        controller.routeService."${serviceMethod}"(*_) >> { throw new RuntimeException('test') }

        when:
        controller."${controllerMethod}"()

        then:
        response.text == 'test'

        where:
        controllerMethod | serviceMethod
        'index'          | 'getAllRoutes'
        'save'           | 'createRoute'
    }

}
