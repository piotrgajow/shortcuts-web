package commands

import java.time.LocalDateTime

class CreateTripCommand {

    Long routeId
    LocalDateTime startTime
    Long duration

    void setStartTime(String startTimeString) {
        startTime = LocalDateTime.parse(startTimeString)
    }

}
