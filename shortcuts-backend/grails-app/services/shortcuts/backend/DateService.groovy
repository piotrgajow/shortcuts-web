package shortcuts.backend

import grails.transaction.Transactional

@Transactional
class DateService {

    static final String DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'"

    Date parseDate(String dateString) {
        return Date.parse(DATE_FORMAT, dateString)
    }

}
