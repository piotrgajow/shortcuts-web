ruleset {
    ruleset('rulesets/basic.xml')
    ruleset('rulesets/braces.xml')
    ruleset('rulesets/concurrency.xml')
//    ruleset('rulesets/dry.xml')
//    ruleset('rulesets/enhanced.xml')
    ruleset('rulesets/exceptions.xml') {
        exclude 'ThrowRuntimeException'
    }
    ruleset('rulesets/formatting.xml') {
        exclude 'ClassJavadoc'
        exclude 'SpaceAroundMapEntryColon'
        LineLength {
            length = 200
        }
    }
    ruleset('rulesets/generic.xml')
    ruleset('rulesets/grails.xml')
    ruleset('rulesets/convention.xml') {
        exclude 'NoDef'
    }
    ruleset('rulesets/design.xml')
    ruleset('rulesets/groovyism.xml')
    ruleset('rulesets/imports.xml')
    ruleset('rulesets/jdbc.xml')
    ruleset('rulesets/junit.xml')
    ruleset('rulesets/logging.xml')
    ruleset('rulesets/naming.xml') {
        FactoryMethodName {
            regex = /(build.*|make.*)/
        }
        MethodName {
            doNotApplyToClassNames= '*Spec'
        }
    }
    ruleset('rulesets/security.xml')
    ruleset('rulesets/serialization.xml')
    ruleset('rulesets/size.xml') {
        exclude 'CrapMetric' // Disabled due to Cobertura issues in CodeNarc
    }
    ruleset('rulesets/unnecessary.xml') {
        exclude 'UnnecessaryReturnKeyword'
    }
    ruleset('rulesets/unused.xml')
}
