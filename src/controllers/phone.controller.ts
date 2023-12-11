import * as phoneService from '../services/phone.service';
import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

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

export const getPhone = (req: Request, res: Response) => {
  const { phoneId } = req.params;

  fs.readFile(path.resolve(`../../api/phones/${phoneId}.json`), (err, data) => {
    if (err) {
      res.sendStatus(404);

      return;
    }

    const result = {
      phoneDetails: data,
      phone: JSON.stringify(phoneService.findPhone(phoneId)),
    };

    res.send(JSON.stringify(result));
  });
};

export const phoneLength = (req: Request, res: Response) => {
  res.send(phoneService.phonesLength());
};
