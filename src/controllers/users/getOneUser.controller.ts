import { Request, Response } from "express";
import { getOneUserService } from "../../services/users/getOneUser.service";

export const getOneUserController = async (req: Request, res: Response) => {
  const urlId: string = req.params.uid;
  const [status, respData] = await getOneUserService(urlId);
  return res.status(status).json(respData);
};
