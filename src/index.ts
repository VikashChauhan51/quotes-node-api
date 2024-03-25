import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import errorHandler from "./middlewares/error-handler";
import quoteRoutes from './routes/quote.route';


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//configure routes
app.use('/api/', quoteRoutes);

// configure middlewares
app.use(errorHandler);

//start server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});