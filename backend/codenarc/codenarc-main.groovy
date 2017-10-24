ruleset {
    ruleset('rulesets/basic.xml')
    ruleset('rulesets/braces.xml')
    ruleset('rulesets/concurrency.xml')
    ruleset('rulesets/dry.xml') {
        DuplicateStringLiteral {
            doNotApplyToFilesMatching = /(.*UrlMappings.groovy)/
        }
        DuplicateMapLiteral {
            doNotApplyToFilesMatching = /(.*UrlMappings.groovy)/
        }
    }
//    ruleset('rulesets/enhanced.xml')
    ruleset('rulesets/exceptions.xml')
    ruleset('rulesets/formatting.xml') {
        exclude 'ClassJavadoc'
        exclude 'SpaceAroundMapEntryColon'
    }
    ruleset('rulesets/generic.xml')
    ruleset('rulesets/grails.xml')
    ruleset('rulesets/convention.xml') {
        exclude 'NoDef'
    }
    ruleset('rulesets/design.xml')
    ruleset('rulesets/groovyism.xml')
    ruleset('rulesets/imports.xml')
    ruleset('rulesets/jdbc.xml') {
        JdbcStatementReference {
            doNotApplyToFilesMatching = /.*UserType.groovy/
        }
        JdbcResultSetReference {
            doNotApplyToFilesMatching = /.*UserType.groovy/
        }
    }
    ruleset('rulesets/junit.xml')
    ruleset('rulesets/logging.xml')
    ruleset('rulesets/naming.xml') {
        FactoryMethodName {
            regex = /(build.*|make.*)/
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
