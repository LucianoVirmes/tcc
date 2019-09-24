'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('pesagem', 'codempresa', {
      type: Sequelize.BIGINT,
      references: {
        model: 'empresa',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn('pesagem', 'codempresa', {
     type: Sequelize.INTEGER
   })
  }
};
