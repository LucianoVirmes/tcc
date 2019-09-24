'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'veiculo',
      'tara', {
        type: Sequelize.BIGINT
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'veiculo',
      'tara'
    )
  }
};
