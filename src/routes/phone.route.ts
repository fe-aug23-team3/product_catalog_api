import express from 'express';
import * as phoneControllers from '../controllers/phone.controller';

export const phoneRouter = express.Router();

phoneRouter.get('/', phoneControllers.getAllPhones);
phoneRouter.get('/:phoneId', phoneControllers.getPhone);
phoneRouter.get('/newest', phoneControllers.getNewest);
phoneRouter.get('/discount', phoneControllers.getBiggestDiscount);
phoneRouter.get('/recomendation', phoneControllers.getNewest);
