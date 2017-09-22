package shortcuts.backend

class UrlMappings {

    private static final String INDEX = 'index'
    private static final String SAVE = 'save'

    static mappings = {
        "/$controller/$action?/$id?(.$format)?" {
            constraints {
                // apply constraints here
            }
        }

        '/route'(controller: 'Route') {
            action = [POST: SAVE, GET: INDEX]
        }

        "/route/$routeId/trip"(controller: 'Trip') {
            action = [POST: SAVE]
        }

        '/'(view: '/index')
        '500'(view: '/error')
        '404'(view: '/notFound')
    }
}
