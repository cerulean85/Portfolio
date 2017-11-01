var express = require('express');
var router = express.Router();

var api = require('./api');
router.get('/getMenu', api.getMenu);
router.get('/getTesting', api.getTesting);
router.get('/getTestingWithParams', api.getTestingWithParams);
router.post('/postTesting', api.postTesting); //이름 중복되면 안 됨.
router.post('/postTestingWithParams', api.postTestingWithParams); //이름 중복되면 안 됨.

module.exports = router;