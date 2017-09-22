package shortcuts.backend

import org.joda.time.Period
import spock.lang.Specification

class PeriodJsonMapperSpec extends Specification {

    void "Should map Period object to JSON"() {
        given:
        JsonMapper<Period> mapper = new PeriodJsonMapper()

        expect:
        mapper.mapToJson(period) == expectedResult

        where:
        period                             | expectedResult
        new Period(1, 1, 1, 1, 1, 1, 1, 1) | [years: 1, months: 1, weeks: 1, days: 1, hours: 1, minutes: 1, seconds: 1, millis: 1]
    }

}
