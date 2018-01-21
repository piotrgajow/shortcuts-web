package shortcuts.backend.usertypes

import org.hibernate.HibernateException
import org.hibernate.engine.spi.SessionImplementor
import org.hibernate.type.StringType
import util.DateFormatters

import java.sql.PreparedStatement
import java.sql.ResultSet
import java.sql.SQLException
import java.time.LocalDateTime

class LocalDateTimeUserType extends CustomUserType {

    @Override
    int[] sqlTypes() {
        return [StringType.INSTANCE.sqlType()]
    }

    @Override
    Class returnedClass() {
        return LocalDateTime
    }

    @Override
    Object nullSafeGet(ResultSet rs, String[] names, SessionImplementor session, Object owner)
            throws HibernateException, SQLException {
        String dateString = (String) StringType.INSTANCE.get(rs, names[0], session)
        return dateString ? LocalDateTime.parse(dateString, DateFormatters.MYSQL) : null
    }

    @Override
    void nullSafeSet(PreparedStatement st, Object value, int index, SessionImplementor session)
            throws HibernateException, SQLException {
        String dateString = value ? ((LocalDateTime) value).format(DateFormatters.MYSQL) : null
        StringType.INSTANCE.set(st, dateString, index, session)
    }

}
