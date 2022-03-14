'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recommend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  recommend.init({
    restaurant: DataTypes.STRING,
    food_name: DataTypes.STRING,
    food_img: DataTypes.STRING,
    food_price: DataTypes.INTEGER,
    food_type: DataTypes.STRING,
    food_member: DataTypes.INTEGER,
    restaurant_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recommend',
  });
  return recommend;
};