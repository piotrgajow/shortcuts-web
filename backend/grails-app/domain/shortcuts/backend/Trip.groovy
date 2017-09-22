package shortcuts.backend

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import util.Constraints

@ToString(includeNames = true)
@EqualsAndHashCode
class Trip {

    Route route
    Date startTime
    Long duration

    static belongsTo = [Route]

    static mapping = {
        id column: 'trip_id'
        route column: 'route_id'
        startTime column: 'start_time'
        duration column: 'duration'
    }

    static constraints = {
        route Constraints.NOT_NULL
        startTime Constraints.NOT_NULL
        duration Constraints.NOT_NULL
    }

}
