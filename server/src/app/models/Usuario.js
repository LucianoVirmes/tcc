'use strict';

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('usuario', {
    dataAdmissao: DataTypes.DATE,
    dataDemissao: DataTypes.DATE,
    email: DataTypes.STRING,
    permissoes: DataTypes.STRING
  }, 
  {
    paranoid: true,
    tableName: 'usuario'
  });

  Usuario.associate =  function (models) {
    Usuario.belongsTo(models.Pessoa, {onCreate: 'cascade',foreignKey: 'codpessoa'});
  }

  return Usuario;
};