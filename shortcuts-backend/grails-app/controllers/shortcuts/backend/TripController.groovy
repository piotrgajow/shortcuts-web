package shortcuts.backend

import grails.converters.JSON

class TripController {

    def tripService

    def save(Long routeId) {
        render tripService.createTrip(routeId, request.JSON) as JSON
    }

    def getByRoute(Long routeId) {
        render tripService.getByRoute(routeId) as JSON
    }

    def getById(Long tripId) {
        render tripService.getById(tripId) as JSON
    }

}
