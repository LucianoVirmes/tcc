'use strict';
module.exports = (sequelize, DataTypes) => {
  const empresa_motorista = sequelize.define('empresa_motorista', {
    codempresa: DataTypes.INTEGER,
    codmotorista: DataTypes.INTEGER,
    ativoEmpresa: DataTypes.BOOLEAN
  });
 
  return empresa_motorista;
};