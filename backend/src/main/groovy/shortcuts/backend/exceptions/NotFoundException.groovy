package shortcuts.backend.exceptions

import javax.servlet.http.HttpServletResponse

class NotFoundException extends CustomException {

    NotFoundException(String message) {
        super(message, HttpServletResponse.SC_NOT_FOUND)
    }

}
