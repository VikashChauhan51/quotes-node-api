import express from "express";
import {
  getQuotes,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/quote.controller";

import { quoteSchemaValidator } from "../schema-validators/quote-schema.validator";

const quoteRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Quote:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: The quote message
 *       required:
 *         - message
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     QuoteDetails:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The quote unique id
 *         message:
 *           type: string
 *           description: The quote message
 *       required:
 *         - id
 *         - message
 */

/**
 * @swagger
 * /api/v1/quote:
 *   get:
 *     tags: [Quotes]
 *     summary: Get all quotes
 *     responses:
 *       200:
 *         description: A list of quotes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quote'
 */
quoteRoutes.get("/api/v1/quote", getQuotes);

/**
 * @swagger
 * /api/v1/{id}/quote:
 *   get:
 *     tags: [Quotes]
 *     summary: Get a quote by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quote ID
 *     responses:
 *       200:
 *         description: The quote
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuoteDetails'
 *       404:
 *         description: The quote was not found
 */
quoteRoutes.get("/api/v1/:id/quote", getQuote);

/**
 * @swagger
 * /api/v1/quote:
 *   post:
 *     tags: [Quotes]
 *     summary: Create a new quote
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quote'
 *     responses:
 *       200:
 *         description: The created quote
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuoteDetails'
 */
quoteRoutes.post("/api/v1/quote", quoteSchemaValidator, () => createQuote);

/**
 * @swagger
 * /api/v1/{id}/quote:
 *   put:
 *     tags: [Quotes]
 *     summary: Update a quote by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quote ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quote'
 *     responses:
 *       204:
 *         description: The quote was updated successfully
 *       404:
 *         description: The quote was not found
 */
quoteRoutes.put("/api/v1/:id/quote", updateQuote);

/**
 * @swagger
 * /api/v1/{id}/quote:
 *   delete:
 *     tags: [Quotes]
 *     summary: Delete a quote by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quote ID
 *     responses:
 *       204:
 *         description: The quote was deleted successfully
 *       404:
 *         description: The quote was not found
 */
quoteRoutes.delete("/api/v1/:id/quote", deleteQuote);

export default quoteRoutes;
