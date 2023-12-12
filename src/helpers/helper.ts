import fs from 'fs/promises';
import path from 'path';
import { PhoneDetail } from '../types/phoneType';
export async function getPhoneDetail(id: string) {
  const phonesDetailPath = path.resolve('./api/phones', `${id}.json`);
  // eslint-disable-next-line no-console
  console.log(path.resolve('./api/phones', `${id}.json`));
  const phonesDetailJson = await fs.readFile(phonesDetailPath, 'utf-8');
  const phonesDetail: PhoneDetail = JSON.parse(phonesDetailJson);
  return phonesDetail;
}
