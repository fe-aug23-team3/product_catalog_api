import dotenv from 'dotenv';
import { Op } from 'sequelize';
import { PhoneQuery, sortType } from '../helpers/helper';
import { Phone, PhoneDetails } from '../models';

dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const findAllWithPagination = async ({
  page,
  sortBy,
  itemsPerPage,
}: PhoneQuery) => {
  const count = await Phone.count();
  const validSortByValues = Object.values(sortType);
  let offset = !isNaN(+page) && +page > 0 ? +page - 1 : 0;
  let limit = !isNaN(+itemsPerPage) ? +itemsPerPage : 16;

  const sort = validSortByValues.includes(sortBy) ? sortBy : sortType.Newest;
  const order =
    sortBy === sortType.Alphabetically || sortBy === sortType.Cheapest
      ? 'ASC'
      : 'DESC';

  const items = [4, 8, 16];

  if (!items.includes(+itemsPerPage)) {
    limit = 16;
  }

  if (itemsPerPage === 'all') {
    limit = count;
  }

  const maxPage = Math.ceil(count / limit) - 1;

  if (offset > maxPage) {
    offset = maxPage;
  }

  let sortByCol = sortType.Alphabetically;

  if (sort === sortType.Newest) {
    sortByCol = 'year';
  }

  if (sort === sortType.Cheapest) {
    sortByCol = 'price';
  }

  return Phone.findAndCountAll({
    offset: offset,
    limit: limit,
    order: [[sortByCol, order]],
  });
};

export const findBiggestDiscount = async () => {
  const data = await Phone.findAll({
    order: [['discount', 'DESC']],
  });

  return data.slice(0, 8);
};

export const findAll = async () => await Phone.findAll();

export const findNewest = async () => {
  const data = await Phone.findAll({
    order: [['year', 'DESC']],
  });

  return data.slice(0, 8);
};

export const findPhonesLength = async () => {
  const allPhones = await Phone.count();

  return String(allPhones);
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
