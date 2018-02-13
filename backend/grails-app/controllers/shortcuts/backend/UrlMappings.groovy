package shortcuts.backend

class UrlMappings {

    static mappings = {

        group '/route', {

            '/'(controller: 'route') {
                action = [POST: 'save', GET: 'index']
            }

            "/$routeId/trip"(controller: 'trip') {
                action = [POST: 'save']
            }

        }

        '/'(view: '/index')
        '500'(view: '/error')
        '404'(view: '/notFound')
    }

}
