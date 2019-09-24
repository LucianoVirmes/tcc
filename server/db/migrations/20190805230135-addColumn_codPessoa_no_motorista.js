'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'motorista',
      'codpessoa', {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'pessoa',
          key: 'id'  
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'motorista',
      'codpessoa'
    )
  }
};
