const config = require('./dataBase.json');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";

const sequelize = new Sequelize(config[env]);
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.usuario = require('../src/app/models/Usuario.js')(sequelize, Sequelize);
db.pessoa = require('../src/app/models/Pessoa.js')(sequelize, Sequelize);
db.produto = require('../src/app/models/Produto.js')(sequelize, Sequelize);

//relations

db.usuario.belongsTo(db.pessoa, {foreignKey: 'codpessoa'});

 
module.exports = db;