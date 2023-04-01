import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { UserEntity } from "../entities/user.entity";

export const verifyDuplicateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(UserEntity);
  const user = await userRepo.findOneBy({
    email: req.body.email,
  });
  if (user) {
    return res.status(409).json({ message: "Email already registered" });
  }
  next();
};
