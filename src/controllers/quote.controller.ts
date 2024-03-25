import { Request, Response } from "express";
import {Quote,QuoteDetails} from '../models/quote.model'


// In-memory collection of quotes
const quotes: QuoteDetails[] = [];

const getQuotes = async (req: Request, res: Response<Quote[]>) => {
  return res.send(quotes);
};


const getQuote = async (req: Request, res: Response) => {
  const id = req.params.id;
  const quote = quotes.find(q => q.id === id);
  if (!quote) {
    return res.status(404).send('Quote not found');
  }
  return res.send(quote);
  };

const createQuote = async (req: Request<Quote>, res: Response<QuoteDetails>) => {
  const newQuote: QuoteDetails = {
    id: Date.now().toString(),
    message: req.body.message,
  };
  quotes.push(newQuote);
  return res.status(201).send(newQuote);
};

const updateQuote = async (req: Request, res: Response) => {
  const id = req.params.id;
  const quote = quotes.find(q => q.id === id);
  if (!quote) {
    return res.status(404).send('Quote not found');
  }
  quote.message = req.body.message;
  return res.send(quote);
};

const deleteQuote = async (req: Request, res: Response) => {
  const id = req.params.id;
  const index = quotes.findIndex(q => q.id === id);
  if (index === -1) {
    return res.status(404).send('Quote not found');
  }
  quotes.splice(index, 1);
  return res.status(204).send();
};

export {
  getQuotes,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
};
