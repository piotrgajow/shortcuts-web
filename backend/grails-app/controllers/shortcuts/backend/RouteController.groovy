package shortcuts.backend

import grails.converters.JSON

class RouteController {

    def routeService

    def index() {
        try {
            render routeService.allRoutes as JSON
        } catch (ex) {
            render ex.message
        }
    }

    def save() {
        try {
            render routeService.createRoute(request.JSON) as JSON
        } catch(ex) {
            render ex.message
        }
    }

}