'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uid: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
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
      pdesc: {
        type: Sequelize.STRING
      },
      pimage: {
        type: Sequelize.STRING
      },
      pquantity: {
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
    await queryInterface.dropTable('Carts');
  }
};