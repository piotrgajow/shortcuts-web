const chakram = require('chakram');
const expect = chakram.expect;
const jsJoda = require('js-joda');

const config = require('./config.json');

const MYSQL_DATETIME_FORMAT = jsJoda.DateTimeFormatter.ofPattern('yyyy-MM-dd HH:mm:ss');
const JSON_DATETIME_FORMAT = jsJoda.DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

module.exports.expectStatusOk = function (response) {
    expect(response).to.have.status(200);
};

module.exports.buildUrl = function (url) {
    return `${config.baseUrl}/${url}`;
};

module.exports.formatDateMysql = function (localDateTime) {
    return localDateTime.format(MYSQL_DATETIME_FORMAT);
};

module.exports.formatDateJson = function (localDateTime) {
    return localDateTime.format(JSON_DATETIME_FORMAT);
};