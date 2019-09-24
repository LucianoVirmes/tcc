'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
      'usuario',  //nome da tabela
      'codpessoa',
      {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'pessoa',
          key: 'id'  
        },
        onUpdate: 'cascade',
        onCreate: 'cascade'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'usuario',
      'codpessoa'
    );
  }
};
