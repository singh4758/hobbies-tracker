import { Request, Response, NextFunction } from 'express';
import Joi, { Schema, ValidationResult } from 'joi';

export function validateRequest(schema: Schema, requestType: 'body' | 'params' | 'query') {
  return (req: Request, res: Response, next: NextFunction) => {
    let data: any;
    switch (requestType) {
      case 'body':
        data = req.body;
        break;
      case 'params':
        data = req.params;
        break;
      case 'query':
        data = req.query;
        break;
      default:
        data = {};
    }

    const { error }: ValidationResult<any> = schema.validate(data, { abortEarly: false, allowUnknown: false });
    if (error) {
      res.status(400).json({ error: error.details.map(({ message }) => message) });
    } else {
      next();
    }
  };
}