databaseChangeLog = {
    include file: 'changes/createRouteTable.sql'
    include file: 'changes/createTripTable.sql'
    include file: 'changes/createTripPointTable.sql'
    include file: 'changes/simplifySchema.sql'
}
