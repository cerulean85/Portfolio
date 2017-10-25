var express = require('express');
var router = express.Router();

var api = require('./api');
router.get('/test', api.getTest);
router.post('/test', api.postTest);

module.exports = router;