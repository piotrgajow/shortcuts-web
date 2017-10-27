package shortcuts.backend

import grails.converters.JSON

import javax.servlet.http.HttpServletResponse

class RouteController {

    def routeService

    def index() {
        def result = routeService.allRoutes
        render result as JSON
    }

    def save() {
        try {
            response.status = HttpServletResponse.SC_CREATED
            render routeService.createRoute(request.JSON) as JSON
        } catch (ex) {
            render ex.message
        }
    }

}
