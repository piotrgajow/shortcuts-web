package shortcuts.backend

import org.joda.time.Period

class PeriodJsonMapper implements JsonMapper<Period> {

    @Override
    def mapToJson(Period period) {
        return [
                years  : period.years,
                months : period.months,
                weeks  : period.weeks,
                days   : period.days,
                hours  : period.hours,
                minutes: period.minutes,
                seconds: period.seconds,
                millis : period.millis
        ]
    }
}