'use strict';

const db = require('../../../config/configDb');
const Pessoa = db.pessoa;

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('usuario', {
    dataAdmissao: DataTypes.DATE,
    dataDemissao: DataTypes.DATE,
    email: DataTypes.STRING,
    permissoes: DataTypes.STRING,
    pessoa: {
      field: 'codpessoa',
      type: DataTypes.INTEGER,
      references: {
        model: Pessoa,
        key: 'id'
      }
    }
  }, 
  {
    paranoid: true,
    tableName: 'usuario'
  });

  Usuario.associate =  function (models) {
    Usuario.belongsTo(models.Pessoa, {foreignKey: 'codpessoa'});
  }
  
  Usuario.salvar = function (usuario){
    Usuario.create(usuario);
  }

  return Usuario;
};