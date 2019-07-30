'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('produto', {
    nome: DataTypes.STRING,
    datavalidade: DataTypes.DATE,
    unidademedida: DataTypes.STRING
  }, {});
  
  return Produto;
};