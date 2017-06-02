package shortcuts.backend

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
