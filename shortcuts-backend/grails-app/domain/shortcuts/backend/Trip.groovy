package shortcuts.backend

class Trip {

    Route route
    Date startTime
    Long time

    static belongsTo = [Route]

    static mapping = {
        id column: 'trip_id'
        route column: 'route_id'
        startTime column: 'start_time'
        time column: 'time'
    }

    static constraints = {
        route nullable: false
        startTime nullable: false
        time nullable: false
    }
}
