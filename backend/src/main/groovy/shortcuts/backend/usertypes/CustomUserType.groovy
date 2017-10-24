package shortcuts.backend.usertypes

import org.hibernate.HibernateException
import org.hibernate.usertype.UserType

abstract class CustomUserType implements UserType {

    @Override
    @SuppressWarnings('EqualsOverloaded')
    boolean equals(Object x, Object y) throws HibernateException {
        return x == y
    }

    @Override
    int hashCode(Object x) throws HibernateException {
        return x?.hashCode()
    }

    @Override
    Object deepCopy(Object value) throws HibernateException {
        return value
    }

    @Override
    boolean isMutable() {
        return false
    }

    @Override
    Serializable disassemble(Object value) throws HibernateException {
        return (Serializable) value
    }

    @Override
    Object assemble(Serializable cached, Object owner) throws HibernateException {
        return cached
    }

    @Override
    Object replace(Object original, Object target, Object owner) throws HibernateException {
        return original
    }

}
