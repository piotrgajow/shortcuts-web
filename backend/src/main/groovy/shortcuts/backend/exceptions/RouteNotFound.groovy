package shortcuts.backend.exceptions

class RouteNotFound extends NotFoundException {

    RouteNotFound(Long id) {
        super("Route with id=${id} does not exist")
    }

}
