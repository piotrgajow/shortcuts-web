package shortcuts.backend

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import util.Constraints

import java.time.LocalDateTime

@ToString(includeNames = true)
@EqualsAndHashCode
class Trip {

    Route route
    LocalDateTime startTime
    Long duration

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
