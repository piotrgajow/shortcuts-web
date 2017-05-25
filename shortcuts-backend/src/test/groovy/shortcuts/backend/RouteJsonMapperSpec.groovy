package shortcuts.backend

import spock.lang.Specification

class RouteJsonMapperSpec extends Specification {

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
        route.trips = times.collect { Long it ->
            Trip trip = new Trip()
            trip.time = it
            return trip
        }
        return route
    }

}
