var express = require('express');
var router = express.Router();
var mockPhones = require('../mocks/phones')

router.get('/', function(req, res, next) {
  res.status(200).send(mockPhones);
});

module.exports = router;
