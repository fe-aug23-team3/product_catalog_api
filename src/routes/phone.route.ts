import express from 'express';
import * as phoneControllers from '../controllers/phone.controller';

export const phoneRouter = express.Router();

phoneRouter.get('/', phoneControllers.getAllPhonesWithPagination);
phoneRouter.get('/allProducts', phoneControllers.getAllPhones);
phoneRouter.get('/length', phoneControllers.getPhoneLength);
phoneRouter.get('/newest', phoneControllers.getNewest);
phoneRouter.get('/discount', phoneControllers.getBiggestDiscount);
phoneRouter.get('/:phoneId', phoneControllers.getPhonesDetails);
phoneRouter.get('/:phoneId/recomendation', phoneControllers.getRecomendation);
