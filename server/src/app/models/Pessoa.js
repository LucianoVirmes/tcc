'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('pessoa', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, 
      primaryKey: true
    },
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    cpf: DataTypes.INTEGER
  }, {
    paranoid: true,
    tableName: 'pessoa'
  });

  return Pessoa;
};