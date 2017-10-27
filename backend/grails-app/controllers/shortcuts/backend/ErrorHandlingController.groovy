package shortcuts.backend

import grails.converters.JSON

import javax.servlet.http.HttpServletResponse

class ErrorHandlingController {

    def handleOtherException(Exception e) {
        def result = [error: e.message]
        response.status = HttpServletResponse.SC_BAD_REQUEST
        render result as JSON
    }

}
