package shortcuts.backend

import commands.CreateTripCommand
import grails.converters.JSON

class TripController {

    def tripService

    def save(Long routeId) {
        try {
            CreateTripCommand command = new CreateTripCommand(
                    routeId: routeId,
                    startTime: request.JSON.startTime,
                    duration: request.JSON.duration,
            )
            def result = tripService.createTrip(command)
            result = new TripJsonMapper().mapToJson(result)
            render result as JSON
        } catch (ex) {
            render ex.message
        }
    }

}
