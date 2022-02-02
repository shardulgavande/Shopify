'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItems', {
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
      pid: {
        type: Sequelize.INTEGER,
        references: { model: 'Products', key: 'id' }
      },
      pname: {
        type: Sequelize.STRING
      },
      pprice: {
        type: Sequelize.INTEGER
      },
      pquantity: {
        type: Sequelize.INTEGER
      },
      ptotal: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('OrderItems');
  }
};