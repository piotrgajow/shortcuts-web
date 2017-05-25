package shortcuts.backend

import grails.transaction.Transactional

@Transactional
class RouteService {

    def createRoute(routeJson) {
        Route route = new Route(routeJson)
        route.save(flus: true, failOnError: true)
        return route
    }

    def getAllRoutes() {
        return Route.findAll()
    }

}
