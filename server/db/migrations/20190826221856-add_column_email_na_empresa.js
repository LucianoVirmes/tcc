'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'empresa',
      'email', 
      {type: Sequelize.STRING}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'empresa', 
      'email'
    )
  }
};
