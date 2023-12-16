// import fs from 'fs';
// import path from 'path';
import dotenv from 'dotenv';
import { Op } from 'sequelize';
// import { QueryParams } from '../types/phoneType';
import { Phone, PhoneDetails } from '../models';

dotenv.config();

// const pathToFile = path.join(__dirname, '../../api/', 'phones.json');

// const fileToRead = fs.readFileSync(pathToFile, 'utf-8');

// export const phones: Phone[] = JSON.parse(fileToRead).map((phone: Phone) => {
//   const discount = Math.round(
//     ((phone.fullPrice - phone.price) / phone.fullPrice) * 100,
//   );

//   return {
//     ...phone,
//     discount,
//     image: `${process.env.SERVER_PATH}/public/${phone.image}`,
//   };
// });

// export const getAllWithPagination = (query: QueryParams) => {
//   const { sortBy, itemsPerPage, page }: QueryParams = query;

//   let filteredPhones: Phone[] = [...phones];

//   switch (sortBy) {
//     case 'Newest':
//       filteredPhones = phones.sort((a: Phone, b: Phone) => b.year - a.year);
//       break;
//     case 'Oldest':
//       filteredPhones = phones.sort((a: Phone, b: Phone) => a.year - b.year);
//       break;
//     case 'Alphabetically':
//       filteredPhones = phones.sort((a: Phone, b: Phone) =>
//         a.name.localeCompare(b.name),
//       );
//       break;

//     case 'Cheapest':
//       filteredPhones = phones.sort((a: Phone, b: Phone) => a.price - b.price);
//       break;

//     default:
//       break;
//   }

//   if (itemsPerPage === 'All') {
//     return filteredPhones;
//   }

//   if (itemsPerPage && page) {
//     filteredPhones = filteredPhones.slice(
//       (Number(page) - 1) * Number(itemsPerPage),
//       Number(page) * Number(itemsPerPage),
//     );
//   }

//   return filteredPhones;
// };

export const findBiggestDiscount = async () => {
  const data = await findAll();

  const sortByDiscount = data.sort(
    (a: Phone, b: Phone) => b.discount - a.discount,
  );

  return sortByDiscount.slice(0, 8);
};

export const findAll = async () => await Phone.findAll();

export const findNewest = async () => {
  const data = await findAll();

  const sortByYear = data.sort((a: Phone, b: Phone) => b.year - a.year);

  return sortByYear.slice(0, 8);
};

export const findPhonesLength = async () => {
  const allPhones = await findAll();

  return String(allPhones.length);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const findOnePhone = async (id: string) => {
  return Phone.findByPk(+id);
};

export const findPhonesDetails = async (phoneId: string) => {
  const data = await PhoneDetails.findByPk(phoneId);
  console.log(`THIS IS DATA FOR CHECKING ${data}`);

  let similarPhonesCriteria = {};
  let similarPhones = null;
  let modifiedProperties = null;

  if (data) {
    similarPhonesCriteria = {
      namespaceId: data.namespaceId,
    };

    similarPhones = await PhoneDetails.findAll({
      where: similarPhonesCriteria,
    });

    modifiedProperties = similarPhones.map((phone) => {
      return {
        ...phone.toJSON(),
        images: phone.images.map(
          (image) => `${process.env.SERVER_PATH}/public/${image}`,
        ),
      };
    });
  }

  return modifiedProperties;
};

export const findRecomendation = async (phoneId: string) => {
  const phoneToFind = await Phone.findAll({
    where: {
      phoneId,
    },
  });

  const allPhones = await Phone.findAll({
    where: {
      price: {
        [Op.between]: [phoneToFind[0].price - 400, phoneToFind[0].price + 400],
      },
      year: {
        [Op.between]: [phoneToFind[0].year - 2, phoneToFind[0].year + 2],
      },
      id: {
        [Op.ne]: phoneToFind[0].id,
      },
      ram: {
        [Op.gte]: phoneToFind[0].ram,
      },
    },
  });

  return allPhones.slice(0, 8);
};
