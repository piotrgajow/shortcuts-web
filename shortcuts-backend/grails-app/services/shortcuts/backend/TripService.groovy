package shortcuts.backend

import grails.transaction.Transactional

@Transactional
class TripService {

    DateService dateService

    def createTrip(Long routeId, tripJson) {
        def path = tripJson.path
        validateTripData(routeId, path)
        Trip trip = buildTrip(routeId, path)
        addTripPoints(trip, path)
        trip.save(flush: true, failOnError: true)
        return trip
    }

    def getByRoute(Long routeId) {
        return Trip.findAllByRoute(Route.get(routeId))
    }

    def getById(Long tripId) {
        return Trip.get(tripId)
    }

    private static def validateTripData(Long routeId, path) {
        if (!routeId) {
            throw new TripCreationException('Trip requires a specified route')
        }
        if (!path) {
            throw new TripCreationException('Trip requires a specified path')
        }
    }

    private Trip buildTrip(Long routeId, path) {
        Route route = Route.get(routeId)
        def tripTimes = getStartAndEndTime(path)
        return new Trip(route: route, startTime: tripTimes.startTime, endTime: tripTimes.endTime)
    }

    private def getStartAndEndTime(path) {
        def timeInstances = path.collect {
            dateService.parseDate(it.time)
        }
        return [startTime: timeInstances.min(), endTime: timeInstances.max()]
    }

    private def addTripPoints(Trip trip, path) {
        path.each { it ->
            Date time = dateService.parseDate(it.time)
            TripPoint point = new TripPoint(latitude: it.latitude, longitude: it.longitude, time: time)
            trip.addToPath(point)
        }
    }

}
