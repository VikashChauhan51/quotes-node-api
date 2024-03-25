import exp from "constants";
import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`Error occurred: ${err.message}`);
  res.status(500).send({ error: "An error occurred, please try again later." });
};

export default errorHandler;