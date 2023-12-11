import express from 'express';
import * as phoneControllers from '../controllers/phone.controller';

export const phoneRouter = express.Router();

phoneRouter.get('/', phoneControllers.getAllPhones);
phoneRouter.get('/newest', phoneControllers.getNewest);
phoneRouter.get('/hottest', phoneControllers.getHottest);
phoneRouter.get('/recomendation', phoneControllers.getNewest);
