package shortcuts.backend

import grails.converters.JSON

class TripController {

    def tripService

    def save(Long routeId) {
        try {
            render tripService.createTrip(routeId, request.JSON) as JSON
        } catch (ex) {
            render ex.message
        }
    }

}
