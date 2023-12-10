import express from 'express';
import * as phoneControllers from '../controllers/phone.controller';

export const phoneRouter = express.Router();

phoneRouter.get('/', phoneControllers.get);
