import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response) => {
  const urlId: string = req.params.uid;
  const [status, respData] = await deleteUserService(urlId);
  return res.status(status).json(respData);
};
