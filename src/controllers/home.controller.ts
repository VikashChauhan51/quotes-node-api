import { Request, Response } from "express";
 
 

const greeting= async (req: Request, res: Response) => {
  return res.send("Sample Nodejs and Express.js framework web API");
};


export {
    greeting
  };
  