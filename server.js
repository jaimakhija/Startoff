var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var routes = require('./routes/company');

//var db = mongoose.connect('mongodb://localhost:27017/Startoff');



var app = express();
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);



/*app.use(function(req, res, next){
    req.db = db;
    next();
});
*/

app.use('/', routes);

app.listen(app.get('port'));
console.log("App listening on port " +  app.get('port'));

module.exports = app;