package shortcuts.backend

import java.time.LocalDateTime

class LocalDateTimeMapper implements JsonMapper<LocalDateTime> {

    @Override
    def mapToJson(LocalDateTime object) {
        return object.toString()
    }

}
