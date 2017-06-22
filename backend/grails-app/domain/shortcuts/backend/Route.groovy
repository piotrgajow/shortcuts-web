package shortcuts.backend

import groovy.transform.ToString

@ToString(includeNames = true)
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

    boolean equals(o) {
        if (this.is(o)) return true
        if (!(o instanceof Route)) return false

        Route route = (Route) o

        if (id != route.id) return false
        if (description != route.description) return false
        return (trips == route.trips)
    }

    int hashCode() {
        int result
        result = (id != null ? id.hashCode() : 0)
        result = 31 * result + (description != null ? description.hashCode() : 0)
        result = 31 * result + (trips != null ? trips.hashCode() : 0)
        return result
    }

}
