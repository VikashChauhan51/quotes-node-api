import { Request, Response, NextFunction } from "express";
import logger from "../configs/logger.config";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(`${req.method} ${req.url}`);
  next();
};
