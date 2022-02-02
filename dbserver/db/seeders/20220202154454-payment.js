'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payments', [
      {
       oid: 1,
       uid: 2,
       status: 'Completed', 
       paymentmode: 'Cash on Delivery',
       date: '02/02/2021',
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
