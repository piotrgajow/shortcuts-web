package shortcuts.backend

import grails.converters.JSON

import javax.servlet.http.HttpServletResponse

class RouteController {

    def routeService

    def index() {
        render routeService.allRoutes as JSON
    }

    def save() {
        response.status = HttpServletResponse.SC_CREATED
        render routeService.createRoute(request.JSON) as JSON
    }

}
