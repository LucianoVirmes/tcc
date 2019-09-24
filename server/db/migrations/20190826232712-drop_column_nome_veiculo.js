'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'veiculo',
      'nome'
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'veiculo',
      'nome', {
        type: Sequelize.STRING
      }
    )
  }
};
