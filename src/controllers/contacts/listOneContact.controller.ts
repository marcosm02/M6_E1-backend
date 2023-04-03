import { Request, Response } from "express";
import { listoOneContactService } from "../../services/contacts/listOneContact.service";

export const listOneContactController = async (req: Request, res: Response) => {
  const urlId = req.params.cid;
  const [status, respData] = await listoOneContactService(urlId);
  return res.status(status).json(respData);
};
