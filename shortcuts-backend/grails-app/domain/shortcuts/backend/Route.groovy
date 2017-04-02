package shortcuts.backend

import grails.rest.Resource

@Resource(uri='/route')
class Route {

    String description

    static hasMany = [trips: Trip]

    static mapping = {
        id column: 'route_id'
        description column: 'description'
    }

    static constraints = {
        description nullable: false
    }
}
