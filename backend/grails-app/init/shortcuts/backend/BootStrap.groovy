package shortcuts.backend

import grails.converters.JSON
import org.joda.time.Period

import java.time.LocalDateTime

class BootStrap {

    def init = { servletContext ->
        JSON.registerObjectMarshaller(Period, new PeriodJsonMapper().&mapToJson)
        JSON.registerObjectMarshaller(LocalDateTime, new LocalDateTimeMapper().&mapToJson)
    }
    def destroy = {
    }
}
