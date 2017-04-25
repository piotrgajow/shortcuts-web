package shortcuts.backend

import grails.transaction.Transactional

@Transactional
class RouteService {

    def statisticsService

    def getAllRoutesWithStatistics() {
        def allRoutes = Route.getAll()
        return allRoutes.collect { Route route ->
            List trips = route.trips.toList()
            return [
                    route          : route,
                    averageDuration: statisticsService.calculateAverageTripTime(trips),
                    shortestTrip   : statisticsService.findShortestPath(trips)
            ]
        }
    }

}
