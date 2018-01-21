const chakram = require('chakram');
const expect = chakram.expect;
const jsJoda = require('js-joda');
const LocalDateTime = jsJoda.LocalDateTime;

const config = require('./config.json');

const MYSQL_DATETIME_FORMAT = jsJoda.DateTimeFormatter.ofPattern('yyyy-MM-dd HH:mm:ss');

module.exports.expectStatusOk = function (response) {
    expect(response).to.have.status(200);
};

module.exports.buildUrl = function (url, params = {}) {
    let endpointUrl = url;
    Object.keys(params).forEach((paramKey) => {
        endpointUrl = endpointUrl.replace(`$${paramKey}`, params[paramKey]);
    });
    return `${config.baseUrl}/${endpointUrl}`;
};

module.exports.formatDate = function (localDateTime) {
    return localDateTime.format(MYSQL_DATETIME_FORMAT);
};