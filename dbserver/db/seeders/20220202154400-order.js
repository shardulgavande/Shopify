'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Orders', [
    {
     ordernumber: 768,
     uid: 2,
     address: 'Thane', 
     ordertotal:13370,
     odate: '02/02/2021',
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
