package shortcuts.backend

class UrlMappings {

    static mappings = {

        group '/route', {

            get '/'(controller: 'route', action: 'index')
            post '/'(controller: 'route', action: 'save')

            post "/$routeId/trip"(controller: 'trip', action: 'save')

        }

        '/'(view: '/index')
        '500'(view: '/error')
        '404'(view: '/notFound')
    }

}
