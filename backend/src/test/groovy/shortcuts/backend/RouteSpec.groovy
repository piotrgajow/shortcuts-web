package shortcuts.backend

import grails.test.mixin.TestFor
import grails.validation.ValidationException
import spock.lang.Specification
import spock.lang.Unroll

@TestFor(Route)
class RouteSpec extends Specification {

    void 'should contain description'() {
        when:
        Route route = new Route(
                locationFrom: 'origin',
                locationTo: 'destination',
                description: 'validDescription',
        )

        then:
        route.description == 'validDescription'
    }

    @Unroll
    void 'should throw validation error'() {
        when:
        new Route(input).save()

        then:
        thrown ValidationException

        where:
        input                                                      | _
        [:]                                                         | _
        [locationFrom: '']                                         | _
        [locationFrom: ' \t\n']                                    | _
        [locationFrom: 'x']                                        | _
        [locationFrom: 'x', locationTo: '']                        | _
        [locationFrom: 'x', locationTo: ' \t\n']                   | _
        [locationFrom: 'x', locationTo: 'y']                       | _
        [locationFrom: 'x', locationTo: 'y', description: '']      | _
        [locationFrom: 'x', locationTo: 'y', description: ' \t\n'] | _
    }

}
