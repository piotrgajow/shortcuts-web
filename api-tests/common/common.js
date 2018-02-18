const chakram = require('chakram');
const expect = chakram.expect;
const jsJoda = require('js-joda');

const config = require('./config.json');

const MYSQL_DATETIME_FORMAT = jsJoda.DateTimeFormatter.ofPattern('yyyy-MM-dd HH:mm:ss');
const JSON_DATETIME_FORMAT = jsJoda.DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

module.exports.expectStatusOk = verifyStatusFunction(200);

module.exports.buildUrl = function (url, params = {}) {
    let endpointUrl = url;
    Object.keys(params).forEach((paramKey) => {
        endpointUrl = endpointUrl.replace(`$${paramKey}`, params[paramKey]);
    });
    return `${config.baseUrl}/${endpointUrl}`;
};

module.exports.formatDateMysql = function (localDateTime) {
    return localDateTime.format(MYSQL_DATETIME_FORMAT);
};

module.exports.formatDateJson = function (localDateTime) {
    return localDateTime.format(JSON_DATETIME_FORMAT);
};

function verifyStatusFunction(expectedStatus) {
    return function (res) {
        const msg = res.body.error || 'No errorm essage';
        expect(res.response.statusCode).to.be.equal(expectedStatus, `Invalid status because: ${msg}`);
    }
}
