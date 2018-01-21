package util

import java.time.format.DateTimeFormatter

class DateFormatters {

    static final DateTimeFormatter MYSQL = DateTimeFormatter.ofPattern('yyyy-MM-dd HH:mm:ss')
    static final DateTimeFormatter JSON = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")

}
