package shortcuts.backend.exceptions

class CustomException extends RuntimeException {

    def status

    CustomException(String message, status) {
        super(message)
        this.status = status
    }

}
