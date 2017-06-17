package shortcuts.backend.experiments

import spock.lang.Issue
import spock.lang.Specification

import java.time.Duration

class JavaTimeSpec extends Specification {

    def "Create duration from seconds"() {
        expect:
        Duration.ofSeconds(2).seconds == 2
    }

    def "Compare durations of different units"() {
        expect:
        Duration.ofSeconds(1) == Duration.ofMillis(1000)
    }

    def "Add durations"() {
        expect:
        Duration.ofSeconds(1) + Duration.ofSeconds(3) == Duration.ofSeconds(4)
    }

    def "Divide duration by scalar"() {
        expect:
        Duration.ofSeconds(10).dividedBy(2).seconds == 5
    }

    def "Calculate average duration"() {
        given:
        List<Duration> durations = durationsList

        expect:
        durations.sum().dividedBy(durations.size()).seconds == 4
    }

    def "Find smallest duration"() {
        given:
        List<Duration> durations = durationsList

        expect:
        durations.min().seconds == 1
    }

    @Issue('Different representation of data than expected')
    def "Check duration components"() {
        given:
        def twoMinutes = Duration.ofSeconds(135)

        expect:
        twoMinutes.toMinutes() == 2

        and:
        twoMinutes.seconds == 135
        // Expected behaviour:
        // twoMinutes.seconds == 15
    }

    private static getDurationsList() {
        return [Duration.ofSeconds(8), Duration.ofSeconds(1), Duration.ofSeconds(3)]
    }

}
