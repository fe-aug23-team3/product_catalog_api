import * as phoneService from '../services/phone.service';
import { Request, Response } from 'express';

export const get = (req: Request, res: Response) => {
  const allPhones = phoneService.getAll(req.query);
  res.send(allPhones);
};
