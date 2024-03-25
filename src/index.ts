import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import errorHandler from "./middlewares/error-handler";
import logger from "./configs/logger.config";
import { requestLogger } from "./middlewares/request-logger";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import cors from 'cors';
import bodyParser  from 'body-parser';

import quoteRoutes from "./routes/quote.route";
import homeRoutes from "./routes/home.route";

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
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//configure routes
app.use(quoteRoutes);
app.use(homeRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Enable CORS for all routes
app.use(cors());

//start server
app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
