import express from 'express';
import * as phoneControllers from '../controllers/phone.controller';

export const phoneRouter = express.Router();

phoneRouter.get('/', phoneControllers.getAllPhones);
phoneRouter.get('/allProducts', phoneControllers.getAllPhones);
phoneRouter.get('/length', phoneControllers.getPhoneLength);
phoneRouter.get('/newest', phoneControllers.getNewest);
phoneRouter.get('/discount', phoneControllers.getBiggestDiscount);
phoneRouter.get('/:phoneId/recomendation', phoneControllers.getRecomendation);
phoneRouter.get('/:phoneId', phoneControllers.getPhonesDetails); // we use it when we click on phone card
