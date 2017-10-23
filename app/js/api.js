var db = require('./database');
exports.test_GET = function(requ,res) {
    db.dbConnection.query('call test()',function(err, rows){
        res.json(rows);
    })
}