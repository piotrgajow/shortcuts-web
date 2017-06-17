package shortcuts.backend

class RouteJsonMapper implements JsonMapper<Route> {

    @Override
    def mapToJson(Route it) {
        return [
                id         : it.id,
                description: it.description,
                averageTime: calculateAvarageTime(it)
        ]
    }

    static calculateAvarageTime(Route route) {
        def times = route.trips*.duration
        def averageTime = times ? times.sum() / times.size() : null
        return averageTime
    }

}
