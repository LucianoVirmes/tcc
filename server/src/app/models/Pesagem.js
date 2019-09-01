'use strict';
module.exports = (sequelize, DataTypes) => {
  const pesagem = sequelize.define('pesagem', {
    codempresa: DataTypes.BIGINT,
    datahora: DataTypes.DATE,
    codmotorista: DataTypes.BIGINT,
    codveiculo: DataTypes.BIGINT,
    pesotara: DataTypes.BIGINT,
    pesoliquido: DataTypes.BIGINT,
    pesobruto: DataTypes.BIGINT
  }, {
    tableName: 'pesagem'
  });
  
  return pesagem;
};