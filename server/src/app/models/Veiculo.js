'use strict';
module.exports = (sequelize, DataTypes) => {
  const veiculo = sequelize.define('veiculo', {
    nome: DataTypes.STRING,
    placa: DataTypes.STRING
  }, {
    paranoid: true,
    tableName: 'veiculo'
  });

  return veiculo;
};