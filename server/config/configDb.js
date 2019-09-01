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
db.motorista = require('../src/app/models/Motorista.js')(sequelize, Sequelize);
db.empresa = require('../src/app/models/Empresa.js')(sequelize, Sequelize);
db.veiculo = require('../src/app/models/Veiculo.js')(sequelize, Sequelize);
db.pesagem = require('../src/app/models/Pesagem.js')(sequelize, Sequelize);
db.empresaVeiculo = require('../src/app/models/EmpresaVeiculo.js')(sequelize, Sequelize);
db.empresaMotorista = require('../src/app/models/EmpresaMotorista.js')(sequelize, Sequelize);
//relations

db.usuario.belongsTo(db.pessoa, {foreignKey: 'codpessoa'});
db.motorista.belongsTo(db.pessoa, {foreignKey: 'codpessoa'});

db.empresa.belongsToMany(db.motorista, {through: 'empresa_motorista', foreignKey: 'codempresa'});
db.motorista.belongsToMany(db.empresa, {through: 'empresa_motorista', foreignKey: 'codmotorista'});

db.empresa.belongsToMany(db.veiculo, {through: 'empresa_veiculo', foreignKey: 'codempresa'});
db.veiculo.belongsToMany(db.empresa, {through: 'empresa_veiculo', foreignKey: 'codveiculo'});

db.motorista.hasMany(db.pesagem, {foreignKey: 'codmotorista'});
db.empresa.hasMany(db.pesagem, {foreignKey: 'codempresa'});
db.veiculo.hasMany(db.pesagem, {foreignKey: 'codveiculo'});
db.pesagem.belongsTo(db.empresa, {foreignKey: 'codempresa', as: 'empresa'});
db.pesagem.belongsTo(db.veiculo, {foreignKey: 'codveiculo', as: 'veiculo'});
db.pesagem.belongsTo(db.motorista, {foreignKey: 'codmotorista', as: 'motorista'});

module.exports = db;