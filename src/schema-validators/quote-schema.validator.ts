import { body } from "express-validator";
import {schemaValidator} from './schema-validator';

export const quoteSchemaValidator = schemaValidator([body("message").not().isEmpty().trim().escape()]);

 
