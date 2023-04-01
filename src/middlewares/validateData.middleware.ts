import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

export const validateDataMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validate = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });
      req.body = validate;
      return next();
    } catch (error) {
      return res.status(400).json({ error: error.errors });
    }
  };
