import fs from 'fs';
import path from 'path';
import { Phone, QueryParams } from '../types/phoneType';

const pathToFile = path.join(__dirname, '../../api/', 'phones.json');

const fileToRead = fs.readFileSync(pathToFile, 'utf-8');

const phones = JSON.parse(fileToRead);

export const getAll = (query: QueryParams) => {
  const { sortBy, amountPhones, page }: QueryParams = query;

  let filteredPhones: Phone[] = [...phones];

  switch (sortBy) {
    case 'newest':
      filteredPhones = phones.sort((a: Phone, b: Phone) => b.year - a.year);
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
