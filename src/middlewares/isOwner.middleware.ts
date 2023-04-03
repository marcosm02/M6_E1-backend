import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { UserEntity } from "../entities/user.entity";

export const isOwnerMiddleware = async (
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

  const urlId: string = req.params.uid;
  const userId: string = req.user.id;
  if (urlId !== userId) {
    return res.status(401).json({ message: "Permission denied" });
  }
  next();
};
