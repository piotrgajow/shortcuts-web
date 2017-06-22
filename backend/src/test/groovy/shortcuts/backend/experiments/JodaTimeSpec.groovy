package shortcuts.backend.experiments

import org.joda.time.Duration
import org.joda.time.Instant
import spock.lang.Issue
import spock.lang.Specification

class JodaTimeSpec extends Specification {

    static final DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss'

    def "Create duration from two dates"() {
        given:
        def d1 = new Instant(Date.parse(DATE_FORMAT, '2000-01-01 10:00:00'))
        def d2 = new Instant(Date.parse(DATE_FORMAT, '2000-01-01 10:00:01'))

        expect:
        new Duration(d1, d2).standardSeconds == 1
    }

    def "Create duration from milliseconds"() {
        expect:
        new Duration(2000).standardSeconds == 2
    }

    def "Add durations"() {
        expect:
        new Duration(1000) + new Duration(3000) == new Duration(4000)
    }

    def "Divide duration by scalar"() {
        expect:
        new Duration(10000).dividedBy(2).standardSeconds == 5
    }

    def "Calculate average duration"() {
        given:
        List<Duration> durations = durationsList

        expect:
        durations.sum().dividedBy(durations.size()).standardSeconds == 4
    }

    def "Find smallest duration"() {
        given:
        List<Duration> durations = durationsList

        expect:
        durations.min().standardSeconds == 1
    }

    @Issue('Different representation of data than expected')
    def "Check duration components"() {
        given:
        def twoMinutes = new Duration(135000)

        expect:
        twoMinutes.standardMinutes == 2

        and:
        twoMinutes.standardSeconds == 135
        // Expected behaviour:
        // twoMinutes.standardSeconds == 0
    }

    def "Check period components"() {
        given:
        def twoMinutes = new Duration(135000).toPeriod()

        expect:
        twoMinutes.minutes == 2

        and:
        twoMinutes.seconds == 15
    }

    private static getDurationsList() {
        return [new Duration(8000), new Duration(1000), new Duration(3000)]
    }

}