package shortcuts.backend

import grails.rest.Resource

@Resource(uri='/route')
class Route {

    String description

    static mapping = {
        id column: 'route_id'
    }

    static constraints = {
    }
}
