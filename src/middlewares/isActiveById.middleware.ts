import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { UserEntity } from "../entities/user.entity";

export const isActiveByIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(UserEntity);
  const user = await userRepo.findOneBy({
    id: req.user.id,
  });
  if (!user) {
    return res.status(401).json({ message: "Wrong email or password" });
  }
  if (!user.isActive) {
    return res.status(400).json({ message: "User does not exist" });
  }
  next();
};
