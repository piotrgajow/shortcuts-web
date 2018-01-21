const chakram = require('chakram');
const expect = chakram.expect;
const LocalDateTime = require('js-joda').LocalDateTime;

const db = require('../common/db.js');
const common = require('../common/common.js');
const schemas = require('../common/schemas.js');

describe('Module: Routes', () => {

    before(() => {
        return setup();
    });

    describe('Endpoint: /route', () => {

        const url = common.buildUrl('route');

        describe('Method: GET', () => {

            it('should return all existing routes', () => {
                return chakram.get(url)
                    .then((res) => {
                        expect(res).to.have.status(200);
                        expect(res).to.have.schema(schemas.routeList);
                        expect(res.body).to.have.length(2);
                        expect(res.body.map((it) => it.description)).to.be.eql(['Test', 'Test 2']);
                    });
            });

        });

        describe('Method: POST', () => {

            it('should create new route', () => {
                const json = {description: 'New route'};
                return chakram.post(url, json)
                    .then((res) => {
                        expect(res).to.have.status(201);
                        expect(res).to.have.schema(schemas.route);
                        expect(res.body.description).to.be.eql(json.description);
                        return db.executeQuery(`SELECT route_id FROM route WHERE description = 'New route'`);
                    }).then((res) => {
                        expect(res[0].route_id).to.be.a('number');
                    });
            });

        });

    });

    describe('Endpoint: /route/$routeId/trip', () => {

        const url = common.buildUrl('route/$routeId/trip');

        describe('Method: POST', () => {

            it('should add trip to a route', () => {
                let routeId;
                const json = {
                    startTime: LocalDateTime.of(2017, 10, 24, 9, 13, 15),
                    duration: 1385
                };
                return db.executeQuery(`SELECT route_id FROM route WHERE description = 'Test'`)
                    .then((res) => {
                        routeId = res[0].route_id;
                        expect(routeId).to.be.a('number');
                        return chakram.post(url.replace('$routeId', routeId), json)
                    }).then((res) => {
                        expect(res).to.have.schema(schemas.trip);
                        expect(res.body.routeId).to.be.eql(routeId);
                        expect(res.body.duration).to.be.eql(json.duration);
                        expect(res.body.startTime).to.be.eql(json.startTime.toString());
                        return db.executeQuery(`SELECT * FROM trip WHERE trip_id = ${res.body.id}`);
                    }).then((res) => {
                        expect(res[0].route_id).to.be.eql(routeId);
                        expect(res[0].start_time).to.be.eql(common.formatDate(json.startTime));
                        expect(res[0].duration).to.be.eql(json.duration);
                    });
            });

        });

    });

    after('teardown', () => {
        return cleanup();
    });

});

function setup() {
    return db.executeQuery(`INSERT INTO route (description) VALUES ('Test'), ('Test 2');`);
}

function cleanup() {
    return db.executeQuery(`DELETE FROM trip;`)
        .then(() => {
            db.executeQuery(`DELETE FROM route;`);
        });
}
