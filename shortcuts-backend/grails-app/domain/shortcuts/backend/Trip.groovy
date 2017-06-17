package shortcuts.backend

import groovy.transform.ToString

@ToString(includeNames = true)
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
        route nullable: false
        startTime nullable: false
        duration nullable: false
    }

    boolean equals(o) {
        if (this.is(o)) return true
        if (!(o instanceof Trip)) return false

        Trip trip = (Trip) o

        if (id != trip.id) return false
        if (route != trip.route) return false
        if (startTime != trip.startTime) return false
        return (duration == trip.duration)
    }

    int hashCode() {
        int result
        result = (route != null ? route.hashCode() : 0)
        result = 31 * result + (startTime != null ? startTime.hashCode() : 0)
        result = 31 * result + (duration != null ? duration.hashCode() : 0)
        result = 31 * result + (id != null ? id.hashCode() : 0)
        return result
    }
}
