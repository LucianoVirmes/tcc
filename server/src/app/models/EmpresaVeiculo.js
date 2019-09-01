'use strict';
module.exports = (sequelize, DataTypes) => {
  const empresa_veiculo = sequelize.define('empresa_veiculo', {
    codempresa: DataTypes.INTEGER,
    codveiculo: DataTypes.INTEGER,
    ativoEmpresa: DataTypes.BOOLEAN
  }, {
    tableName: 'empresa_veiculo'
  });
 
  return empresa_veiculo;
};