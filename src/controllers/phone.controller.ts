import * as phoneService from '../services/phone.service';
import { Request, Response } from 'express';

export const getAllPhones = (req: Request, res: Response) => {
  const allPhones = phoneService.getAllWithPagination(req.query);
  res.send(allPhones);
};

export const getBiggestDiscount = (req: Request, res: Response) => {
  res.send(phoneService.getBiggestDiscount());
};

export const getNewest = (req: Request, res: Response) => {
  res.send(phoneService.getNewest());
};

export const getPhone = async (req: Request, res: Response) => {
  const { phoneId } = req.params;

  try {
    const phoneDetail = await phoneService.getDetail(phoneId);
    res.send(phoneDetail);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      res.status(404).send('Phone detail not found');
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
};

export const getPhoneLength = (req: Request, res: Response) => {
  res.send(phoneService.phonesLength());
};
