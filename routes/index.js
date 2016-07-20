var express = require('express');
var router = express.Router();

// Set Content-Type for all responses for these routes
router.use(function (req, res, next) {
    res.set('Content-Type', 'application/json');
    next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Hello World');
});

module.exports = router;