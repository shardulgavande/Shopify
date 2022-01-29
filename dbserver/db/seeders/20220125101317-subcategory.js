'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SubCategories', [

      {
        cat_id: "1",
        sc_name: "T-Shirts",
        createdAt: new Date(),
        updatedAt: new Date()       
      },


    {
      cat_id: "2",
      sc_name: "Jeans",
      createdAt: new Date(),
      updatedAt: new Date() 

    },

    {
      cat_id: "3",
      sc_name: "T-Shirts",
      createdAt: new Date(),
      updatedAt: new Date()       
    },

  {
    cat_id: "4",
    sc_name: "Jeans",
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
