import express from "express";
import {
  getQuotes,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/quote.controller";
const quoteRoutes = express.Router();

/* GET quotes. */
quoteRoutes.get("/quotes", getQuotes);

/* GET quote. */
quoteRoutes.get("/quote:id", getQuote);

/* POST quote */
quoteRoutes.post("/quote", createQuote);

/* PUT quote */
quoteRoutes.put("/quote:id", updateQuote);

/* DELETE quote */
quoteRoutes.delete("/quote:id", deleteQuote);

export default quoteRoutes;
