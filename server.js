var express = require("express");
var models = require ("./app/models");
var bodyparser = require ('body-parser');
var app = express();
var routes = require('./routes')


app.use(bodyparser.json({limit: '50mb'}))
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,Accept,Content-Type,Content-Length,Authorization,X-Requested-With,X-XSRF-TOKEN");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.method === 'OPTIONS'){
        console.log('OPTIONS SUCCESS');
        res.end();
    }
    next();
});
app.use('/api/',routes)
models.sequelize.sync().then(function(){
    var server = app.listen(4201,function(){
        console.log('Express server listening on port' + server.address().port);
    });
});