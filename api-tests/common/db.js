const mysql = require('mysql');
const config = require('./config.json');

const connection = mysql.createConnection(config.mysql);

module.exports.executeQuery = executeQuery;

function executeQuery(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, res) => err ? reject(err) : resolve(res));
    });
}
