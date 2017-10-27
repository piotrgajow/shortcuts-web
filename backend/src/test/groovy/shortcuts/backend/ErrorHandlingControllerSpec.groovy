package shortcuts.backend

import grails.test.mixin.TestFor
import spock.lang.Specification

import javax.servlet.http.HttpServletResponse

@TestFor(ErrorHandlingController)
class ErrorHandlingControllerSpec extends Specification {

    void 'handleOtherException should render proper response'() {
        when:
        controller.handleOtherException(new RuntimeException(message))

        then:
        response.status == HttpServletResponse.SC_BAD_REQUEST
        response.json.error == message

        where:
        message        | _
        'test message' | _
    }

}
