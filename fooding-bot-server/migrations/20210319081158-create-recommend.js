'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recommends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurant: {
        type: Sequelize.STRING
      },
      food_name: {
        type: Sequelize.STRING
      },
      food_img: {
        type: Sequelize.STRING
      },
      food_price: {
        type: Sequelize.INTEGER
      },
      restaurant_address: {
        type: Sequelize.STRING
      },
      food_type: {
        type: Sequelize.STRING
      },
      food_member: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recommends');
  }
};