package shortcuts.backend

import grails.transaction.Transactional

@Transactional
class TripService {

    def createTrip(Long routeId, Map tripJson) {
        Route route = Route.get(routeId)
        if (!route) {
            throw new TripCreationException('Trip requires a specified route')
        }
        Trip trip = new Trip(tripJson)
        trip.route = route
        trip.save()
        return trip
    }

}
