import java.time.LocalDateTime

grails.gorm.default.mapping = {
    version false
    'user-type'(type: shortcuts.backend.usertypes.LocalDateTimeUserType, class: LocalDateTime)
}
