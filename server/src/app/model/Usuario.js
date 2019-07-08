const sequelize = require('../../config/dataBase');
const { Model, Sequelize } = require('sequelize');

class Usuario extends Model {}
Usuario.init({
  nome: Sequelize.STRING,
  dataNascimento: Sequelize.DATE,
  permissoes: Sequelize.STRING,
}, { sequelize, modelName: 'usuario' });



module.exports = Usuario;