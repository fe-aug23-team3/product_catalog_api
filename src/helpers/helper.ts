// import fs from 'fs';
// import { Phone, PhoneDetails } from './models';
// import { sequelize } from './utils/initDb';
// import { PhoneType } from './types/phoneType';
// import { phones } from './services/phone.service';
// import { Optional } from 'sequelize';

// export const sync = async () => {
//   console.log('All models were synchronized successfully.');
//   return sequelize.sync({ force: true });
// };

// export const seedPhoneDesc = async () => {
//   try {
//     const filesToRead = fs.readdirSync('./api/phones/', 'utf-8');

//     const data = [];

//     for (const file of filesToRead) {
//       data.push(JSON.parse(fs.readFileSync(`./api/phones/${file}`, 'utf-8')));
//     }

//     await PhoneDetails.bulkCreate(data);

//     console.log('Seed completed successfully.');
//   } catch (error) {
//     console.error('Error seeding PhoneDetails data:', error);
//   }
// };

// seedPhoneDesc();

// export const seedPhones = async () => {
//   try {
//     const transformedPhones: Optional<PhoneType, 'id'>[] = phones.map(
//       (phone) => {
//         const { ...rest } = phone;
//         return rest;
//       },
//     );

//     await Phone.bulkCreate(transformedPhones);
//     console.log('Seed completed successfully.');
//   } catch (error) {
//     console.error('Error seeding Phone data:', error);
//   }
// };

// sync().then(seedPhoneDesc).then(seedPhones);

// drop all tables from sync()
// const dropTables = async () => {
//   await sequelize.drop();
// };

// dropTables();
