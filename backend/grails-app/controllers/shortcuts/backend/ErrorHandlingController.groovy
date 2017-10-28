package shortcuts.backend

import grails.converters.JSON
import shortcuts.backend.exceptions.CustomException

import javax.servlet.http.HttpServletResponse

class ErrorHandlingController {

    def handleCustomException(CustomException e) {
        def result = [error: e.message]
        response.status = e.status
        render result as JSON
    }

    def handleOtherException(Exception e) {
        def result = [error: e.message]
        response.status = HttpServletResponse.SC_INTERNAL_SERVER_ERROR
        render result as JSON
    }

}
