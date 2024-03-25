import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import errorHandler from "./middlewares/error-handler";
import quoteRoutes from "./routes/quote.route";
import logger from "./configs/logger.config";
import { requestLogger } from "./middlewares/request-logger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// configure middlewares
app.use(requestLogger);
app.use(errorHandler);

//configure routes
app.use("/api/", quoteRoutes);


//start server
app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
