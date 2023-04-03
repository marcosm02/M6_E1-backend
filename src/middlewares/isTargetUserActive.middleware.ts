import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { UserEntity } from "../entities/user.entity";

export const isTargetUserActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(UserEntity);
  const user = await userRepo.findOneBy({
    id: req.params.uid,
  });
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }
  if (!user.isActive) {
    return res.status(400).json({ message: "User does not exist" });
  }
  next();
};
