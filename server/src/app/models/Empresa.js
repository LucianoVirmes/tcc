'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('empresa', {
    nome: DataTypes.STRING,
    cnpj: DataTypes.INTEGER
  }, {});
  
  return Empresa;
};