package shortcuts.backend

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@ToString(includeNames = true)
@EqualsAndHashCode
class Route {

    Long id
    String description

    static mapping = {
        table 'route'

        id column: 'route_id'
        description column: 'description'
    }

    static constraints = {
        description nullable: false, blank: false
    }

}
