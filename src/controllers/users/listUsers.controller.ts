import { Request, Response } from "express";
import { listUsersService } from "../../services/users/listUsers.service";

export const listUsersController = async (req: Request, res: Response) => {
  const [status, respData] = await listUsersService();
  return res.status(status).json(respData);
};
