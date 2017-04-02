package shortcuts.backend

import grails.transaction.Transactional

@Transactional
class TripService {

    DateService dateService

    def createTrip(Long routeId, tripJson) {
        if (!routeId) {
            throw new TripCreationException('Trip requires a specified route')
        }
        def path = tripJson.path
        if (!path) {
            throw new TripCreationException('Trip requires a specified path')
        }

        Route route = Route.get(routeId)
        def timeInstances = path.collect {
            dateService.parseDate(it.time)
        }
        Date startTime = timeInstances.min()
        Date endTime = timeInstances.max()

        Trip trip = new Trip(route: route, startTime: startTime, endTime: endTime)
        path.each { it ->
            trip.addToPath(new TripPoint(latitude: it.latitude, longitude: it.longitude, time: dateService.parseDate(it.time)))
        }
        trip.save(flush: true, failOnError: true)

        return trip
    }

    def getByRoute(Long routeId) {
        return Trip.findAllByRoute(Route.get(routeId))
    }

    def getById(Long tripId) {
        return Trip.get(tripId)
    }


}
