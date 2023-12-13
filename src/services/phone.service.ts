import fs from 'fs';
import path from 'path';
import env from 'dotenv';
import { Phone, QueryParams } from '../types/phoneType';
import { getPhoneDetail } from '../helpers/helper';

env.config();

const pathToFile = path.join(__dirname, '../../api/', 'phones.json');

const fileToRead = fs.readFileSync(pathToFile, 'utf-8');

const phones: Phone[] = JSON.parse(fileToRead).map((phone: Phone) => {
  const discount = Math.round(
    ((phone.fullPrice - phone.price) / phone.fullPrice) * 100,
  );

  return {
    ...phone,
    discount,
    image: `${process.env.SERVER_PATH}/public/${phone.image}`,
  };
});

export const getAllWithPagination = (query: QueryParams) => {
  const { sortBy, itemsPerPage, page }: QueryParams = query;

  let filteredPhones: Phone[] = [...phones];

  switch (sortBy) {
    case 'Newest':
      filteredPhones = phones.sort((a: Phone, b: Phone) => b.year - a.year);
      break;
    case 'Oldest':
      filteredPhones = phones.sort((a: Phone, b: Phone) => a.year - b.year);
      break;
    case 'Alphabetically':
      filteredPhones = phones.sort((a: Phone, b: Phone) =>
        a.name.localeCompare(b.name),
      );
      break;

    case 'Cheapest':
      filteredPhones = phones.sort((a: Phone, b: Phone) => a.price - b.price);
      break;

    default:
      break;
  }

  if (itemsPerPage === 'All') {
    return filteredPhones;
  }

  if (itemsPerPage && page) {
    filteredPhones = filteredPhones.slice(
      (Number(page) - 1) * Number(itemsPerPage),
      Number(page) * Number(itemsPerPage),
    );
  }

  return filteredPhones;
};

export const getBiggestDiscount = () => {
  const sortByDiscount = [...phones].sort(
    (a: Phone, b: Phone) => b.discount - a.discount,
  );

  return sortByDiscount.slice(0, 8);
};

export const getNewest = () => {
  const sortByYear = [...phones].sort((a: Phone, b: Phone) => b.year - a.year);

  return sortByYear.slice(0, 8);
};

export const findPhone = (phoneId: string) => {
  return phones.find((phone) => phone.phoneId === phoneId);
};

export const getDetail = async (id: string) => {
  const phoneDetail = await getPhoneDetail(id);

  return phoneDetail;
};

export const phonesLength = () => String(phones.length);
