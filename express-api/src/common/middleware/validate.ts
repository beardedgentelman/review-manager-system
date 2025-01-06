import {Request, Response, NextFunction} from 'express';
import {ZodSchema, ZodError} from 'zod';

export const validate = (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse(req);
        next();
      } catch (error) {
        if (error instanceof ZodError) {
          res.status(400).json({errors: error.errors});
        }
        next(error);
      }
    };
