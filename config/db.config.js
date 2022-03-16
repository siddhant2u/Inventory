'user strict';

const mysql = require('mysql');

const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sepm'
});
mysqlConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = mysqlConn;