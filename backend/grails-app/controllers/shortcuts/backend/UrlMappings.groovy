package shortcuts.backend

class UrlMappings {

    static mappings = {

        '/route'(controller: 'Route') {
            action = [POST: 'save', GET: 'index']
        }

        "/route/$routeId/trip"(controller: 'Trip') {
            action = [POST: 'save']
        }

        '/'(view: '/index')
        '500'(view: '/error')
        '404'(view: '/notFound')
    }

}
