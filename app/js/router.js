var express = require('express');
var router = express.Router();

var dir = require('./api');
router.get('/test', dir.test_GET);

module.exports = router;