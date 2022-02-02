'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderItems.init({
    oid: DataTypes.INTEGER,
    pid: DataTypes.INTEGER,
    pname: DataTypes.STRING,
    pprice: DataTypes.INTEGER,
    pquantity: DataTypes.INTEGER,
    ptotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderItems',
  });
  return OrderItems;
};