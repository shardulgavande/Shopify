'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    uid: DataTypes.INTEGER,
    pid: DataTypes.INTEGER,
    pname: DataTypes.STRING,
    pprice: DataTypes.INTEGER,
    pdesc: DataTypes.STRING,
    pimage: DataTypes.STRING,
    pquantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};