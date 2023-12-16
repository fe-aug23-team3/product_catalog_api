/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

const fs = require('fs/promises');
const path = require('path');
const dotenv = require('dotenv').config();

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const folderPath = path.join(__dirname, '../api/phones');

    const descriptionJsonFiles = async (folderPath) => {
      const filesToRead = await fs.readdir(folderPath);

      const data = await Promise.all(
        filesToRead
          .filter(async (file) => file.endsWith('.json'))
          .map(async (file) => {
            const filePath = path.join(folderPath, file);
            const fileData = await fs.readFile(filePath, 'utf-8');
            const item = JSON.parse(fileData);

            return item;
          }),
      );

      return data;
    };

    const phonesDetails = await descriptionJsonFiles(folderPath);

    const phonesFromServer = phonesDetails.map((phone) => ({
      ...phone,
      images: phone.images.map(
        (image) => `${process.env.SERVER_PATH}public/${image}`,
      ),
      description: JSON.stringify(phone.description),
    }));

    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert('phoneDetails', phonesFromServer, {
        transaction,
      });

      await transaction.commit();
    } catch (error) {
      console.log(error);

      await transaction.rollback();
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    await queryInterface.bulkDelete('phoneDetails', null, {});
  },
};
