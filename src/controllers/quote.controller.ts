import { Request, Response } from "express";
import {Quote,QuoteDetails} from '../models/quote.model'

const getQuotes = async (req: Request, res: Response<Quote[]>) => {
  //TODO
  return res.send([]);
};


const getQuote = async (req: Request, res: Response<QuoteDetails>) => {
    const id = req.params.id;
     //TODO
  };

const createQuote = async (req: Request<Quote>, res: Response<QuoteDetails>) => {
  //TODO
};

const updateQuote = async (req: Request, res: Response) => {
  //TODO
};

const deleteQuote = async (req: Request, res: Response) => {
  //TODO
};

export {
  getQuotes,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
};
