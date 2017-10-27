package shortcuts.backend

import commands.CreateTripCommand
import grails.transaction.Transactional
import shortcuts.backend.exceptions.RouteNotFound

@Transactional
class TripService {

    def createTrip(CreateTripCommand command) {
        Route route = Route.get(command.routeId)
        if (!route) {
            throw new RouteNotFound(command.routeId)
        }
        Trip trip = new Trip(startTime: command.startTime, duration: command.duration)
        trip.route = route
        trip.save()
        return trip
    }

}
