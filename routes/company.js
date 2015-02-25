var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res){
	res.send("Welcome to express");
});

module.exports = router;