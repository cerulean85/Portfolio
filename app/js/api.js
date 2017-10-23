var db = require('./database');
exports.getTest = function(requ,res) {
    db.dbConnection.query('call test()',function(err, rows){
        res.json(rows);
    })
}