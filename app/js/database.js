var mysql = require('mysql');
var dbAccount = {
    host : '35.201.163.239',
    user : 'root',
    password : '12345678',
    port     : '3306',
    database : "TECHPEDIA"
};

exports.dbConnection = mysql.createConnection(dbAccount);
