'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'pessoa',  //nome da tabela
      'deletedAt',
      {
        type: Sequelize.DATE,
      }  
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'pessoa',
      'deletedAt'
    )
  }
};
