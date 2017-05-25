package shortcuts.backend

import grails.transaction.Transactional

@Transactional
class TripService {

    def createTrip(routeId, tripJson) {
        Route route = Route.get(routeId)
        Trip trip = new Trip(tripJson)
        trip.route = route
        trip.save(flus: true, failOnError: true)
        return trip
    }

}
