export interface PhoneQuery {
  page: string;
  sortBy: string;
  itemsPerPage: string;
}

export const sortType = {
  Alphabetically: 'name',
  Cheapest: 'price',
  Newest: 'year',
};
