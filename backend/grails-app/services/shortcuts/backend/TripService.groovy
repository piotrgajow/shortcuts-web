package shortcuts.backend

import commands.CreateTripCommand
import grails.transaction.Transactional

@Transactional
class TripService {

    def createTrip(CreateTripCommand command) {
        Route route = Route.get(command.routeId)
        if (!route) {
            throw new TripCreationException('Trip requires a specified route')
        }
        Trip trip = new Trip(startTime: command.startTime, duration: command.duration)
        trip.route = route
        trip.save()
        return trip
    }

}
