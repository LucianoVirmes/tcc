'use strict';
module.exports = (sequelize, DataTypes) => {
  const pesagem = sequelize.define('pesagem', {
    codempresa: DataTypes.INTEGER,
    datahora: DataTypes.DATE,
    codmotorista: DataTypes.INTEGER,
    codveiculo: DataTypes.INTEGER
  }, {
    tableName: 'pesagem'
  });
  
  return pesagem;
};