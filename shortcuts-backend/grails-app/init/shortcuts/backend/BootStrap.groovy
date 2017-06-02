package shortcuts.backend

import grails.converters.JSON
import org.joda.time.Period

class BootStrap {

    def init = { servletContext ->
        JSON.registerObjectMarshaller(Period, new PeriodJsonMapper().&mapToJson)
        JSON.registerObjectMarshaller(Route, new RouteJsonMapper().&mapToJson)
    }
    def destroy = {
    }
}
