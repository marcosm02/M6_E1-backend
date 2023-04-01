import { Request, Response } from "express";
import { listContactsService } from "../../services/contacts/listContacts.service";

export const listContactsController = async (req: Request, res: Response) => {
  const [status, respData] = await listContactsService();
  return res.status(status).json(respData);
};
