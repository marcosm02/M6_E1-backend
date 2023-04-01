import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: "Missing token" });
  }
  const token = auth.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = {
      id: decoded.sub,
      isActive: decoded.isActive,
    };
  });
  return next();
};
