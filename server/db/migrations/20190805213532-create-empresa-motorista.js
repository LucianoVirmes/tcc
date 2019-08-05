'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('empresa_motorista', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codempresa: {
        type: Sequelize.INTEGER,
        references: {
          model: "empresa",
          key: "id"
        }
      },
      codmotorista: {
        type: Sequelize.INTEGER,
        references: {
          model: "motorista",
          key: "id"
        }
      },
      ativoEmpresa: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('empresa_motorista');
  }
};