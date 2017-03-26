package shortcuts.backend

import grails.rest.Resource

class Route {

    String description

    static constraints = {
        description blank: false
    }
}
