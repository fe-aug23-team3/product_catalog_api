import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import * as models from '../models';

dotenv.config();

if (!process.env.DB_URI) {
  throw new Error('DB_URI is not defined in the environment variables.');
}

export const sequelize = new Sequelize(process.env.DB_URI, {
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
