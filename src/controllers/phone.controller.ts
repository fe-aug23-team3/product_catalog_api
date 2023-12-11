import * as phoneService from '../services/phone.service';
import { Request, Response } from 'express';

export const getAllPhones = (req: Request, res: Response) => {
  const allPhones = phoneService.getAll(req.query);
  res.send(allPhones);
};

export const getHottest = (req: Request, res: Response) => {
  const hottestPhones = phoneService.getHottest();

  res.send(hottestPhones);
};

export const getNewest = (req: Request, res: Response) => {
  const newestPhones = phoneService.getNewest();

  res.send(newestPhones);
};
