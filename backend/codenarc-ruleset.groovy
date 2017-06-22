ruleset {
    ruleset('rulesets/basic.xml')
    ruleset('rulesets/groovyism.xml')
    ruleset('rulesets/naming.xml') {
        FactoryMethodName {
            regex = /(build.*|make.*)/
        }
    }
    ruleset('rulesets/unused.xml')
    ruleset('rulesets/unnecessary.xml') {
        exclude 'UnnecessaryReturnKeyword'
    }
    ruleset('rulesets/grails.xml')
}