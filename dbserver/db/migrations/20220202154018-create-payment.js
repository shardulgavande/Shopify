'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      oid: {
        type: Sequelize.INTEGER,
        references: { model: 'Orders', key: 'id' }
      },
      uid: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      status: {
        type: Sequelize.STRING
      },
      paymentmode: {
        type: Sequelize.STRING
      },
      date: {
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
    await queryInterface.dropTable('Payments');
  }
};