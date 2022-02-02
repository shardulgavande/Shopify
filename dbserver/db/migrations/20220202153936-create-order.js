'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ordernumber: {
        type: Sequelize.INTEGER
      },
      uid: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      address: {
        type: Sequelize.STRING
      },
      ordertotal: {
        type: Sequelize.INTEGER
      },
      odate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};