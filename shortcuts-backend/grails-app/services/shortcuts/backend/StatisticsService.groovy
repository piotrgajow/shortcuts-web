package shortcuts.backend

import grails.transaction.Transactional
import org.joda.time.Duration
import org.joda.time.Instant

@Transactional
class StatisticsService {

    def calculateAverageTripTime(List<Trip> trips) {
        def durations = trips.collect { Trip trip ->
            Instant startInstant = new Instant(trip.startTime)
            Instant endInstant = new Instant(trip.endTime)
            return new Duration(startInstant, endInstant)
        }
        return ((Duration) durations.sum()).dividedBy(durations.size())
    }

}
