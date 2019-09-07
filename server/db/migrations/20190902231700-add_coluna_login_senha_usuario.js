'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'usuario',
        'login', {
          type: Sequelize.STRING,
        }, { transaction }
      );
      await queryInterface.addColumn(
        'usuario',
        'senha', {
          type: Sequelize.STRING,
          allowNull: false
        }
      );
      await queryInterface.sequelize.query(`update usuario set login = id`);

      await queryInterface.changeColumn('usuario', 'login', {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }, { transaction });

      await transaction.commit();
    }
    catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn(
      'usuario',
      'login'
    ), queryInterface.removeColumn(
      'usuario',
      'senha'
    )
    ])
  }
}
