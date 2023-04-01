import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users/users.interfaces";
import { createUserService } from "../../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const newUser = await createUserService(user);
  return res.status(201).json(newUser);
};
