package shortcuts.backend

import util.DateFormatters

import java.time.LocalDateTime

class LocalDateTimeMapper implements JsonMapper<LocalDateTime> {

    @Override
    def mapToJson(LocalDateTime object) {
        return object.format(DateFormatters.JSON)
    }

}
