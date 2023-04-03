import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users/users.interfaces";
import { updateUserService } from "../../services/users/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(400).json({ message: "User not found" });
  }
  const data: IUserUpdate = req.body;
  const urlId: string = req.params.uid;
  const [status, respData] = await updateUserService(data, urlId);
  return res.status(status).json(respData);
};
