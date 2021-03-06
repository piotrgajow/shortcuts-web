const chakram = require('chakram');
const expect = chakram.expect;
const LocalDateTime = require('js-joda').LocalDateTime;

const db = require('../common/db.js');
const common = require('../common/common.js');
const schemas = require('../common/schemas.js');

let url;
let json;

describe('Module: Routes', () => {

    before(() => {
        return setup();
    });

    describe('Endpoint: /route', () => {

        const urlTemplate = 'route';

        describe('Method: GET', () => {

            it('should return all existing routes', () => {
                url = common.buildUrl(urlTemplate);
                return chakram.get(url)
                    .then((res) => {
                        common.expectStatusOk(res);
                        expect(res).to.have.schema(schemas.routeList);
                        expect(res.body).to.have.length(2);
                        expect(res.body.map((it) => it.description)).to.be.eql(['Test', 'Test 2']);
                    });
            });

        });

        describe('Method: POST', () => {

            it('should create new route', () => {
                url = common.buildUrl(urlTemplate);
                json = { locationFrom: 'Origin', locationTo: 'destination', description: 'New route' };
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

        const urlTemplate = 'route/$routeId/trip';

        describe('Method: POST', () => {

            it('should add trip to a route', () => {
                let routeId;
                const dateTime = LocalDateTime.of(2017, 10, 24, 9, 13, 15);
                const json = {
                    startTime: common.formatDateJson(dateTime),
                    duration: 1385
                };
                return db.executeQuery(`SELECT route_id FROM route WHERE description = 'Test'`)
                    .then((res) => {
                        routeId = res[0].route_id;
                        expect(routeId).to.be.a('number');
                        url = common.buildUrl(urlTemplate, { routeId: routeId });
                        return chakram.post(url, json);
                    }).then((res) => {
                        common.expectStatusOk(res);
                        expect(res).to.have.schema(schemas.trip);
                        expect(res.body.routeId).to.be.eql(routeId);
                        expect(res.body.duration).to.be.eql(json.duration);
                        expect(res.body.startTime).to.be.eql(json.startTime);
                        return db.executeQuery(`SELECT * FROM trip WHERE trip_id = ${res.body.id}`);
                    }).then((res) => {
                        expect(res[0].route_id).to.be.eql(routeId);
                        expect(res[0].start_time).to.be.eql(common.formatDateMysql(dateTime));
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
    return db.executeQuery(`INSERT INTO route (location_from, location_to, description) VALUES ('x', 'y', 'Test'), ('y', 'x', 'Test 2');`);
}

function cleanup() {
    return db.executeQuery(`DELETE FROM trip;`)
        .then(() => {
            db.executeQuery(`DELETE FROM route;`);
        });
}
