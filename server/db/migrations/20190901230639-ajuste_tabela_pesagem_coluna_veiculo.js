'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('pesagem', 'codveiculo', {
      type: Sequelize.BIGINT,
      references: {
        model: 'veiculo',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn('pesagem', 'codveicul', {
     type: Sequelize.INTEGER
   })
  }
};
