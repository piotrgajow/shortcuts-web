package shortcuts.backend

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?" {
            constraints {
                // apply constraints here
            }
        }

        "/route/$routeId/trip"(controller: 'Trip') {
            action = [POST: 'save', GET: 'getByRoute']
        }
        "/trip/$tripId"(method: 'GET', controller: 'Trip', action: 'getById')

        "/"(view: "/index")
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
