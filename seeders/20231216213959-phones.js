/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    const filePath = path.join(__dirname, '../api/phones.json');

    const fileToRead = fs.readFileSync(filePath, 'utf-8');

    const parcedData = JSON.parse(fileToRead);

    const phonesFromServer = parcedData.map((data) => ({
      ...data,
      discount: Math.round(
        ((data.fullPrice - data.price) / data.fullPrice) * 100,
      ),
      image: `${process.env.SERVER_PATH}public/${data.image}`,
    }));

    try {
      await queryInterface.bulkInsert('phones', phonesFromServer, {});
    } catch (error) {
      console.log(`phone Seed is in ${error}`);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phones', null, {});
  },
};
