import express from 'express';

import { phoneRouter } from './routes/phone.route';

function createServer() {
  const app = express();

  app.use('/phones', phoneRouter);

  return app;
}

createServer().listen(3000, () => {
  console.log('server is running on http://localhost3000');
});
