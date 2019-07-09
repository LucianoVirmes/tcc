'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    cpf: DataTypes.INTEGER
  }, {});

  return Pessoa;
};