import fs from 'fs';
import path from 'path';
import env from 'dotenv';
import { Phone, QueryParams } from '../types/phoneType';

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
  const { sortBy, amountPhones, page }: QueryParams = query;

  let filteredPhones: Phone[] = [...phones];

  switch (sortBy) {
    case 'newest':
      filteredPhones = phones.sort((a: Phone, b: Phone) => b.year - a.year);
      break;
    case 'oldest':
      filteredPhones = phones.sort((a: Phone, b: Phone) => a.year - b.year);
      break;
    case 'highestPrice':
      filteredPhones = phones.sort((a: Phone, b: Phone) => a.price - b.price);
      break;

    case 'lowestPrice':
      filteredPhones = phones.sort((a: Phone, b: Phone) => b.price - a.price);
      break;

    default:
      break;
  }

  if (amountPhones && page) {
    filteredPhones = filteredPhones.slice(
      (Number(page) - 1) * Number(amountPhones),
      Number(page) * Number(amountPhones),
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

export const phonesLength = () => phones.length;
