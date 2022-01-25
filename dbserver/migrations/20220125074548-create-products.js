'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: Sequelize.TEXT
      },
      pquantity: {
        type: Sequelize.INTEGER
      },
      subcat_id: {
        type: Sequelize.INTEGER,
        references: { model: 'SubCategories', key: 'id' }
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
    await queryInterface.dropTable('Products');
  }
};