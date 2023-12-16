'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phoneDetails', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      namespaceId: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      capacityAvailable: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      capacity: {
        type: Sequelize.STRING,
      },
      priceRegular: {
        type: Sequelize.INTEGER,
      },
      priceDiscount: {
        type: Sequelize.INTEGER,
      },
      colorsAvailable: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      color: {
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      description: {
        type: Sequelize.JSONB,
      },
      screen: {
        type: Sequelize.STRING,
      },
      resolution: {
        type: Sequelize.STRING,
      },
      processor: {
        type: Sequelize.STRING,
      },
      ram: {
        type: Sequelize.STRING,
      },
      camera: {
        type: Sequelize.STRING,
      },
      zoom: {
        type: Sequelize.STRING,
      },
      cell: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phoneDetails');
  },
};
