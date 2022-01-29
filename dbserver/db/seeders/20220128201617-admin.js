'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Admins', [
      {
       name: 'Shweta',
       mobileNo: 8169744455,
       emailId:'shweta@gmail.com',
       password:'Shweta@10',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Koushik',
      mobileNo: 8169743366,
      emailId:'koushik@gmail.com',
      password:'Koushik@10',
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
