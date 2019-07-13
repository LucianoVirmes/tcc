'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    dataAdmissao: DataTypes.DATE,
    dataDemissao: DataTypes.DATE,
    email: DataTypes.STRING,
    permissoes: DataTypes.STRING,
  }, {});
  
  return Usuario;
};