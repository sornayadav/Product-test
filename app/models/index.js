'use strict';

var fs = require ('fs');
var path = require ('path');
var sequelize = require('sequelize');
var basename = path.basename(module.filename);
var config = require ('../../config/config.json').database;
var db = {};
var sequelize= new sequelize(config.name, config.username, config.password, config);

fs.readdirSync (__dirname)
.filter(function (file){
    return (file.indexOf('.') !==0) && (file !==basename) && (file.slice(-3) === '.js');

})
.forEach (function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
});
// Object.keys(db.forEach(function (modelName) {
//     if(db[modelName].associate){
//         db[modelName].associate(db);
//     }
// }));

db.sequelize = sequelize;
db.sequelize = sequelize;
module.exports = db;