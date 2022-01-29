'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CategoryTypes', [

      {

       type_name: "Men",

       createdAt: new Date(),

       updatedAt: new Date()       

     },

    {
      type_name: "Women",
      
      createdAt: new Date(),

      updatedAt: new Date()       

    },

    {
      type_name: "Kids",
     
      createdAt: new Date(),

      updatedAt: new Date()      

    }

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
