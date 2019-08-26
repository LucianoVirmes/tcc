'use strict';
module.exports = (sequelize, DataTypes) => {
  const empresa_veiculo = sequelize.define('empresa_veiculo', {
    codempresa: DataTypes.INTEGER,
    codveiculo: DataTypes.INTEGER,
    ativoEmpresa: DataTypes.BOOLEAN
  });
 
  return empresa_veiculo;
};