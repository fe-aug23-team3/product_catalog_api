import * as phoneService from '../services/phone.service';
import { Request, Response } from 'express';

// Find all phones
export const getAllPhones = async (req: Request, res: Response) => {
  const allPhones = await phoneService.findAll();
  res.send(allPhones);
};

// Find one phone by id
export const getOnePhone = async (req: Request, res: Response) => {
  const { phoneId } = req.params;

  const phone = await phoneService.findOnePhone(phoneId);

  res.send(phone);
};

// DONE | find phones with the biggest discount
export const getBiggestDiscount = async (req: Request, res: Response) => {
  const phonesWithDiscount = await phoneService.findBiggestDiscount();
  res.send(phonesWithDiscount);
};

// DONE | find newest models of the phones
export const getNewest = async (req: Request, res: Response) => {
  const newestPhones = await phoneService.findNewest();
  console.log(newestPhones);

  res.send(newestPhones);
};

// DONE | find phone details by phoneId
export const getPhonesDetails = async (req: Request, res: Response) => {
  const { phoneId } = req.params;

  try {
    const phoneDetail = await phoneService.findPhonesDetails(phoneId);

    console.log(phoneDetail);

    res.send(phoneDetail);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      res.status(404).send('Phone detail not found');
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
};

// DONE | find length of phone`s array
export const getPhoneLength = async (req: Request, res: Response) => {
  const phonesLength = await phoneService.findPhonesLength();
  res.send(phonesLength);
};

export const getRecomendation = async (req: Request, res: Response) => {
  const { phoneId } = req.params;

  const phonesToRecomend = await phoneService.findRecomendation(phoneId);

  res.send(phonesToRecomend);
};
