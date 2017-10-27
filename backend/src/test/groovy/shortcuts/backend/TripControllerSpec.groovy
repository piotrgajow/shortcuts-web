package shortcuts.backend

import grails.test.mixin.TestFor
import spock.lang.Specification
import spock.lang.Unroll

@TestFor(TripController)
class TripControllerSpec extends Specification {

    def setup() {
        controller.tripService = Mock(TripService)
        controller.request.JSON = [
                startTime: '2017-10-26 10:20:30',
        ]
    }

    @Unroll
    void '#controllerMethod should call #serviceMethod'() {
        when:
        controller."${controllerMethod}"()

        then:
        1 * controller.tripService."${serviceMethod}"(*_) >> [:]

        where:
        controllerMethod | serviceMethod
        'save'           | 'createTrip'
    }

    @Unroll
    void 'Should handle exceptions during #controllerMethod'() {
        given:
        controller.tripService."${serviceMethod}"(*_) >> { throw new RuntimeException('test') }

        when:
        controller."${controllerMethod}"()

        then:
        response.text == 'test'

        where:
        controllerMethod | serviceMethod
        'save'           | 'createTrip'
    }

}
