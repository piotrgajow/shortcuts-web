package shortcuts.backend

import grails.transaction.Transactional

@Transactional
class RouteService {

    def createRoute(Map routeJson) {
        Route route = new Route(routeJson)
        route.save()
        return route
    }

    def getAllRoutes() {
        return Route.findAll()
    }

}
