const mysql = require("mysql");

var connection = mysql.createPool({
    host: 'localhost',
    user: 'test1234',
    password: '123456789',
    database: 'vacCenter'
})

module.exports = connection;