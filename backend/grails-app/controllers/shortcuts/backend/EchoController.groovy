package shortcuts.backend

class EchoController {

    def index() {
        render request.reader.text
    }

}
