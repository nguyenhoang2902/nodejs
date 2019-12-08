var express = require('express');
var router = express.Router();
const db = require('../query');
/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('home');
});

module.exports = router;
