import { Request, Response } from "express";

const getQuotes = async (req: Request, res: Response) => {
  //TODO
  return res.send({data:[]});
};


const getQuote = async (req: Request, res: Response) => {
    const id = req.params.id;
     //TODO
  };

const createQuote = async (req: Request, res: Response) => {
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
