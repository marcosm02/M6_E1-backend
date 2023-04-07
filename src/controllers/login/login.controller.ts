import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/login/login.interface";
import { loginService } from "../../services/login/login.service";

export const loginController = async (req: Request, res: Response) => {
  const login: IUserLogin = req.body;
  const [status, respLogin] = await loginService(login);
  return res.status(status).json(respLogin);
};
