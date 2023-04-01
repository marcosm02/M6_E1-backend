import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response) => {
  const urlId: string = req.params.id;
  const userId: string = req.user.id;
  const [status, respData] = await deleteUserService(urlId, userId);
  return res.status(status).json(respData);
};
