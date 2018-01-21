package shortcuts.backend

import grails.test.mixin.TestFor
import spock.lang.Specification
import spock.lang.Unroll

@TestFor(TripController)
class TripControllerSpec extends Specification {

    def setup() {
        controller.tripService = Mock(TripService)
        controller.request.JSON = [
                startTime: '2017-10-26T10:20:30.000Z',
        ]
    }

    @Unroll
    void '#controllerMethod should call #serviceMethod'() {
        when:
        controller."${controllerMethod}"()

        then:
        1 * controller."${service}"."${serviceMethod}"(*_) >> serviceResult

        where:
        controllerMethod | service       | serviceMethod | serviceResult
        'save'           | 'tripService' | 'createTrip'  | [:]
    }

}
