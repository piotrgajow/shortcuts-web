package shortcuts.backend

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@ToString(includeNames = true)
@EqualsAndHashCode
class Route {

    Long id
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
