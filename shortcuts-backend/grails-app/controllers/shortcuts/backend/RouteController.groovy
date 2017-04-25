package shortcuts.backend

import grails.converters.JSON

class RouteController {

    def routeService

    def index() {
        try {
            render routeService.getAllRoutesWithStatistics() as JSON
        } catch (ex) {
            render ex.message
        }
    }

}
