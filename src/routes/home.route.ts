import express from "express";
import {
 greeting
} from "../controllers/home.controller";

const homeRoutes = express.Router();

/**
 * @swagger
 * /api/v1/home/greeting:
 *   get:
 *     tags: [Home]
 *     summary: Get greeting message
 *     responses:
 *       200:
 *         description: A greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
homeRoutes.get("/api/v1/home/greeting", greeting);

export default homeRoutes;