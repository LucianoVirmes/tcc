'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('pesagem', 'pesobruto', {
      type: Sequelize.BIGINT
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('pesagem', 'pesobruto')
  }
};
