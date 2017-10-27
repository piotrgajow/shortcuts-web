const chakram = require('chakram');
const expect = chakram.expect;
const config = require('./config.json');

module.exports.expectStatusOk = function (response) {
    expect(response).to.have.status(200);
};

module.exports.buildUrl = function (url) {
    return `${config.baseUrl}/${url}`;
};
