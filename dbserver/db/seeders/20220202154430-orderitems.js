'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderItems', [
      {
       oid: 1,
       pid: 30,
       pname: 'Slim Shirt', 
       pprice: 200,
       pquantity: 2,
       ptotal: 400,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
