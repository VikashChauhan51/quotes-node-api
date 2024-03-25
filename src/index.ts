import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import errorHandler from "./middlewares/error-handler";
import quoteRoutes from "./routes/quote.route";
import logger from "./configs/logger.config";
import { requestLogger } from "./middlewares/request-logger";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
    },
  },
  // Path to the API docs
  apis: ['./dist/routes/*.js'],
};

const specs = swaggerJsdoc(options);


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// configure middlewares
app.use(requestLogger);
app.use(errorHandler);

//configure routes
app.use("/api/", quoteRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

//start server
app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
