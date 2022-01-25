'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    pname: DataTypes.STRING,
    pprice: DataTypes.INTEGER,
    pdesc: DataTypes.STRING,
    pimage: DataTypes.TEXT,
    pquantity: DataTypes.INTEGER,
    subcat_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};