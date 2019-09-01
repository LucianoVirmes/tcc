'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('pesagem', 'codmotorista', {
      type: Sequelize.BIGINT,
      references: {
        model: 'motorista',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn('pesagem', 'codmotorista', {
     type: Sequelize.INTEGER
   })
  }
};
