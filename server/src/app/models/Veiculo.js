'use strict';
module.exports = (sequelize, DataTypes) => {
  const veiculo = sequelize.define('veiculo', {
    placa: DataTypes.STRING,
    tara: DataTypes.BIGINT
  }, {
    paranoid: true,
    tableName: 'veiculo'
  });

  return veiculo;
};