import { Sequelize } from 'sequelize-typescript';
import * as models from '../models';

const URI =
  'postgres://user:bwaFV3kSWPcw5DcyWuOJWaBiTs3UYXra@dpg-clstgigcmk4c73cf18mg-a.frankfurt-postgres.render.com/product_catalog_db_2y5v';

export const sequelize = new Sequelize(URI, {
  models: Object.values(models),
  dialectOptions: {
    ssl: true,
  },
});

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
