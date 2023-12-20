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
      origin: ['https://fe-aug23-team3.github.io', 'http://localhost:3000'],
    }),
  );

  app.use('/public', express.static(path.resolve('../public')));

  // app.use('/tablets', express.json(), tabletsRouter);
  // app.use('/accessories', express.json(), accessoriesRouter);

  app.use('/phones', express.json(), phoneRouter);

  return app;
}

createServer().listen(process.env.PORT, () => {
  console.log(
    `🔥🚀🚀🚀 Server is running on http://localhost${process.env.PORT} 🔥🚀🚀🚀`,
  );
});
