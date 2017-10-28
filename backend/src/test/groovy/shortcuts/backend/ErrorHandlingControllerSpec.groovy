package shortcuts.backend

import grails.test.mixin.TestFor
import shortcuts.backend.exceptions.CustomException
import spock.lang.Specification

import javax.servlet.http.HttpServletResponse

@TestFor(ErrorHandlingController)
class ErrorHandlingControllerSpec extends Specification {

    void 'handleOtherException should render proper response'() {
        when:
        controller."${method}"(exception)

        then:
        response.status == expectedStatus
        response.json.error == expectedMessage

        where:
        method                  | exception                                                         | expectedMessage | expectedStatus
        'handleCustomException' | new CustomException('test', HttpServletResponse.SC_UNAUTHORIZED)  | 'test'          | HttpServletResponse.SC_UNAUTHORIZED
        'handleCustomException' | new CustomException('test2', HttpServletResponse.SC_UNAUTHORIZED) | 'test2'         | HttpServletResponse.SC_UNAUTHORIZED
        'handleCustomException' | new CustomException('test', HttpServletResponse.SC_BAD_REQUEST)   | 'test'          | HttpServletResponse.SC_BAD_REQUEST
        'handleOtherException'  | new RuntimeException('test')                                      | 'test'          | HttpServletResponse.SC_INTERNAL_SERVER_ERROR
    }

}
