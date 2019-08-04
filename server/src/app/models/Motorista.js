'use strict';
module.exports = (sequelize, DataTypes) => {
  const Motorista = sequelize.define('motorista', {
    nome: DataTypes.STRING,
    cnh: DataTypes.INTEGER
  }, {});
  Motorista.associate = function(models) {
    // associations can be defined here
  };
  return Motorista;
};