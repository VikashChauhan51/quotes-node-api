import { body } from "express-validator";

export const quoteSchemaValidator = [
  body("message")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("quote message is required"),
];
