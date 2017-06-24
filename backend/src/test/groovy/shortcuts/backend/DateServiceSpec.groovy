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
        '2000-01-01T20:00:00Z' | createDate(2000, 1, 1, 20, 0, 0)
    }

    private static Date createDate(int year, int month, int day, int hour, int minute, int second) {
        return new DateTime()
                .withYear(year).withMonthOfYear(month).withDayOfMonth(day)
                .withHourOfDay(hour).withMinuteOfHour(minute).withSecondOfMinute(second).withMillisOfSecond(0)
                .toDate()
    }

}
