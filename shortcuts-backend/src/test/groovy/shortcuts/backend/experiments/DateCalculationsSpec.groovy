package shortcuts.backend.experiments

import groovy.time.Duration
import groovy.time.TimeCategory
import spock.lang.Specification

class DateCalculationsSpec extends Specification {

    static DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss'

    def "Create duration from two dates"() {
        given:
        Date d1 = Date.parse(DATE_FORMAT, '2000-01-01 10:00:00')
        Date d2 = Date.parse(DATE_FORMAT, '2000-01-01 10:00:01')

        expect:
        TimeCategory.minus(d2, d1).seconds == 1
    }

    def "Create duration from seconds"() {
        expect:
        new Duration(0, 0, 0, 2, 0).seconds == 2
    }

    def "Compare durations of different units"() {
        expect:
        new Duration(0, 0, 0, 1, 0) == new Duration(0, 0, 0, 0, 1000)
    }

    def "Add durations"() {
        expect:
        new Duration(0, 0, 0, 1, 0) + new Duration(0, 0, 0, 3, 0) == new Duration(0, 0, 0, 4, 0)
    }

    def "Divide duration by scalar"() {
        when:
        (new Duration(0, 0, 0, 10, 0) / 2).seconds == 5

        then:
        thrown MissingMethodException
    }

}
