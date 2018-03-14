package shortcuts.backend

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import util.Constraints

@ToString(includeNames = true)
@EqualsAndHashCode
class Route {

    Long id
    String locationFrom
    String locationTo
    String description

    static mapping = {
        table 'route'

        id column: 'route_id'
        locationFrom column: 'location_from'
        locationTo column: 'location_to'
        description column: 'description'
    }

    static constraints = {
        locationFrom Constraints.NOT_EMPTY_STRING
        locationTo Constraints.NOT_EMPTY_STRING
        description Constraints.NOT_EMPTY_STRING
    }

}
