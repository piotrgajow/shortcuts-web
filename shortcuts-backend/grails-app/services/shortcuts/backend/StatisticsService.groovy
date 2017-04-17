package shortcuts.backend

import grails.transaction.Transactional
import org.joda.time.Duration
import org.joda.time.Instant

@Transactional
class StatisticsService {

    def calculateAverageTripTime(List<Trip> trips) {
        def durations = trips.collect this.&tripToDuration
        return ((Duration) durations.sum()).dividedBy(durations.size())
    }

    def findShortestPath(List<Trip> trips) {
        def tripsWithDuration = trips.collectEntries { Trip trip ->
            return [(trip): tripToDuration(trip)]
        }

        return tripsWithDuration.min {
            it.value
        }.key
    }

    private static Duration tripToDuration(Trip trip) {
        Instant startInstant = new Instant(trip.startTime)
        Instant endInstant = new Instant(trip.endTime)
        return new Duration(startInstant, endInstant)
    }

}
