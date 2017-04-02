package shortcuts.backend

class Trip {

    Route route
    Date startTime
    Date endTime

    static hasMany = [path: TripPoint]
    static belongsTo = [Route]

    static mapping = {
        id column: 'trip_id'
        route column: 'route_id'
        startTime column: 'start_time'
        endTime column: 'end_time'
    }

    static constraints = {
        route nullable: false
        startTime nullable: true
        endTime nullable: true
    }
}
