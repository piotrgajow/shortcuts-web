package shortcuts.backend

import spock.lang.Specification
import spock.lang.Unroll

class RouteJsonMapperSpec extends Specification {

    @Unroll
    void 'Should map Route object to JSON'() {
        given:
        JsonMapper<Route> mapper = new RouteJsonMapper()

        expect:
        mapper.mapToJson(route) == expectedResult

        where:
        route                                | expectedResult
        createRoute(1, 'test', 5, 10, 15)    | [id: 1, description: 'test', averageTime: 10]
        createRoute(15, 'xxx', 150, 150, 30) | [id: 15, description: 'xxx', averageTime: 110]
        createRoute(2, '123')                | [id: 2, description: '123', averageTime: null]
    }

    private static Route createRoute(id, desc, ... times) {
        Route route = new Route()
        route.id = id
        route.description = desc
        List timeList = times as List
        route.trips = timeList.withIndex().collect { duration, index ->
            Trip trip = new Trip()
            trip.id = index
            trip.duration = duration
            return trip
        }
        return route
    }

}
