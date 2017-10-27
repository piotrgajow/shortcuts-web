package shortcuts.backend

import commands.CreateTripCommand
import grails.converters.JSON

class TripController extends ErrorHandlingController {

    TripService tripService

    def save(Long routeId) {
        CreateTripCommand command = new CreateTripCommand(
                routeId: routeId,
                startTime: request.JSON.startTime,
                duration: request.JSON.duration,
        )
        def result = tripService.createTrip(command)
        result = new TripJsonMapper().mapToJson(result)
        render result as JSON
    }

}
