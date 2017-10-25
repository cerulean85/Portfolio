var db = require('./database');
exports.getTest = function(req,res) {
    db.dbConnection.query('call test()',function(err, rows){
        res.json(rows);
        console.log("hohohoho!!");
    })
}

exports.postTest = function(req,res) {
    db.dbConnection.query('call test()',function(err, rows){
        res.json(rows);
    })
}