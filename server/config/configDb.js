const config = require('./dataBase.json');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";

const sequelize = new Sequelize(config[env]);
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.usuario = require('../src/app/models/Usuario.js')(sequelize, Sequelize);
 
 
module.exports = db;