'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      category: {
        type: Sequelize.STRING,
      },
      phoneId: {
        type: Sequelize.STRING,
        references: {
          model: 'phoneDetails',
          key: 'id',
        },
      },
      itemId: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      fullPrice: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      screen: {
        type: Sequelize.STRING,
      },
      capacity: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      ram: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      discount: {
        type: Sequelize.INTEGER,
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  },
};
