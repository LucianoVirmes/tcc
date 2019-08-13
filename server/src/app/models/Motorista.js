'use strict';
module.exports = (sequelize, DataTypes) => {
  const Motorista = sequelize.define('motorista', {
    cnh: DataTypes.INTEGER
  }, {
    tableName: 'motorista'
  });
 
  return Motorista;
};