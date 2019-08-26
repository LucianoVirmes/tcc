'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('empresa', {
    nome: DataTypes.STRING,
    cnpj: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    tableName: 'empresa'
  });
  
  return Empresa;
};