var db = require('./database');

exports.getMenu = function(req,res) {

    db.dbConnection.query(
        'call getMenu()'
        ,function(err, rows){
            var result = [];

            var resMain = rows[0];
            var resSub = rows[1];
            var offset = 0;
            for(var i=0; i<resMain.length; i++) {
                resMain[i]['children'] = [];
                var limit = resMain[i]['child_count'] + offset;
                while(offset < limit) {
                    if(resMain[i]['id'] == resSub[offset]['parent']) {
                        var pos = offset-limit+resMain[i]['child_count'];
                        resMain[i]['children'][pos] = resSub[offset];
                    }
                    offset++;
                }
                result.push(resMain[i]);
            }
            res.json(result);

        });
}

exports.getTesting = function(req,res) {

    db.dbConnection.query(
        'call getMenu()'
        ,function(err, rows){
            //console.log(rows);
            var result = [];

            var resMain = rows[0];
            var resSub = rows[1];
            var offset = 0;
            for(var i=0; i<resMain.length; i++) {
                resMain[i]['children'] = [];
                var limit = resMain[i]['child_count'] + offset;
                while(offset < limit) {
                    if(resMain[i]['id'] == resSub[offset]['parent']) {
                        var pos = offset-limit+resMain[i]['child_count'];
                        resMain[i]['children'][pos] = resSub[offset];
                    }
                    offset++;
                }
                result.push(resMain[i]);
            }
            res.json(result);
            //console.log("GET/No params");
        });

    // db.dbConnection.query('',function(err, rows){
    //     res.json(rows);
    //     console.log("GET/No params");
    // })
}

exports.getTestingWithParams = function(req,res) {
    var idx = req.query.idx;
    db.dbConnection.query('call test_with_params('+idx+')',
        [idx],
        function(err, rows){
        res.json(rows);
            console.log("GET/With params");
    })
}

exports.postTesting = function(req,res) {
    db.dbConnection.query('call test()',function(err, rows){
        res.json(rows);
        console.log("POST/No params");
    })
}

exports.postTestingWithParams = function(req,res) {
    var idx = req.body.params.idx;
    db.dbConnection.query('call test_with_params('+idx+')',
        [idx],
        function(err, rows){
        res.json(rows);
        console.log("POST/With params");
    })
}