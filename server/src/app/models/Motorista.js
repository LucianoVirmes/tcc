'use strict';
module.exports = (sequelize, DataTypes) => {
  const Motorista = sequelize.define('motorista', {
    nome: DataTypes.STRING,
    cnh: DataTypes.INTEGER
  }, {});
 
  return Motorista;
};