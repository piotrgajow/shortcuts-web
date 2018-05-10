package util

import org.springframework.core.env.Environment
import org.springframework.core.env.MapPropertySource

class ConfigurationLoader {

    static void loadFromFile(Environment environment, File file) {
        if (file.exists()) {
            def externalConfig = new ConfigSlurper().parse(file.toURI().toURL())
            environment.propertySources.addFirst(new MapPropertySource("ExternalConfig", externalConfig))
        }
    }

}
