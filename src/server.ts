import express from 'express';
import path from 'path';
import cors from 'cors';
import { phoneRouter } from './routes/phone.route';
import dotenv from 'dotenv';
dotenv.config();

import { connect } from './utils/initDb';

connect();

function createServer() {
  const app = express();

  app.use(
    cors({
      // origin: 'http://localhost:3000',
      origin: 'https://fe-aug23-team3.github.io/product_catalog',
    }),
  );

  app.use('/public', express.static(path.resolve('../public')));

  app.use('/phones', express.json(), phoneRouter);

  return app;
}

createServer().listen(process.env.PORT, () => {
  console.log(
    `🔥🚀🚀🚀 Server is running on http://localhost${process.env.PORT} 🔥🚀🚀🚀`,
  );
});
