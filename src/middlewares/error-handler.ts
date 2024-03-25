import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import logger from "../configs/logger.config";

const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`Error occurred: ${err.message}`);
  res.status(500).send({ error: "An error occurred, please try again later." });
};

export default errorHandler;