'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [

      {
        type_id: "1",
        c_name: "Top Wear",
        createdAt: new Date(),
        updatedAt: new Date()       
      },

    {
      type_id: "1",
      c_name: "Bottom Wear",
      createdAt: new Date(),
      updatedAt: new Date() 
    },

    {
      type_id: "2",
      c_name: "Top Wear",
      createdAt: new Date(),
      updatedAt: new Date()   

    },

    {
      type_id: "2",
      c_name: "Bottom Wear",
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
