package shortcuts.backend

class TripJsonMapper implements JsonMapper<Trip> {

    @Override
    def mapToJson(Trip trip) {
        return [
                id       : trip.id,
                routeId  : trip.route.id,
                startTime: trip.startTime,
                duration : trip.duration,
        ]
    }

}
