var express = require('express');
var router = express.Router();

var dir = require('./api');
router.get('/test', dir.getTest);

module.exports = router;