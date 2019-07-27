'use strict';

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('usuario', {
    dataAdmissao: DataTypes.DATE,
    dataDemissao: DataTypes.DATE,
    permissoes: DataTypes.STRING
  }, 
  {
    paranoid: true,
    tableName: 'usuario'
  });

  return Usuario;
};