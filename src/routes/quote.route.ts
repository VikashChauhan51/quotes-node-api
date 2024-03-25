import express from "express";
import {
  getQuotes,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/quote.controller";
const router = express.Router();

/* GET quotes. */
router.get("/quotes", getQuotes);

/* GET quote. */
router.get("/quote:id", getQuote);

/* POST quote */
router.post("/quote", createQuote);

/* PUT quote */
router.put("/quote:id", updateQuote);

/* DELETE quote */
router.delete("/quote:id", deleteQuote);

export default router;
