package shortcuts.backend

import grails.test.mixin.TestFor
import org.joda.time.DateTime
import spock.lang.Specification
import spock.lang.Unroll

@TestFor(DateService)
class DateServiceSpec extends Specification {

    @Unroll
    void 'Should properly parse dates from strings'() {
        expect:
        service.parseDate(stringDate) == expectedDate

        where:
        stringDate             | expectedDate
        '2000-01-01T20:00:00Z' | createDate(year: 2000, month: 1, day: 1, hour: 20, minute: 0, second: 0)
    }

    private static Date createDate(Map date) {
        return new DateTime()
                .withYear(date.year).withMonthOfYear(date.month).withDayOfMonth(date.day)
                .withHourOfDay(date.hour).withMinuteOfHour(date.minute).withSecondOfMinute(date.second).withMillisOfSecond(0)
                .toDate()
    }

}
