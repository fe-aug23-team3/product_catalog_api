import express from 'express';
import path from 'path';
import cors from 'cors';
import { phoneRouter } from './routes/phone.route';

function createServer() {
  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3000',
    }),
  );

  console.log(__dirname, 'first');
  console.log(path.join(__dirname, '../public'));

  app.use('/public', express.static(path.join(__dirname, '../public')));

  app.use('/phones', express.json(), phoneRouter);

  return app;
}

const PORT = 3005;

createServer().listen(PORT, () => {
  console.log(`🔥🚀🚀🚀 Server is running on http://localhost${PORT} 🔥🚀🚀🚀`);
});
