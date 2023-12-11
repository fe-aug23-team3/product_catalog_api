import express from 'express';
import cors from 'cors';
import { phoneRouter } from './routes/phone.route';

function createServer() {
  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3000',
    }),
  );

  app.use('/public', express.static('public'));

  app.use('/phones', express.json(), phoneRouter);

  return app;
}

const PORT = 3005;

createServer().listen(PORT, () => {
  console.log(`🔥🚀🚀🚀 Server is running on http://localhost${PORT} 🔥🚀🚀🚀`);
});
