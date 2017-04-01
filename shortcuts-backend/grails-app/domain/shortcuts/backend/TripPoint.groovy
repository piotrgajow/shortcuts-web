package shortcuts.backend

class TripPoint {

    Trip trip
    Double latitude
    Double longitude
    Date time

    static belongsTo = [Trip]

    static mapping = {
        id column: 'trip_point_id'
        trip column: 'trip_id'
        latitude column: 'latitude'
        longitude column: 'longitude'
        time column: 'time_instance'
    }

    static constraints = {
        trip nullable: false
        latitude nullable: false
        longitude nullable: false
        time nullable: false
    }
}
