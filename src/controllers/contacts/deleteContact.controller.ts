import { Request, Response } from "express";
import { deleteContactService } from "../../services/contacts/deleteContact.service";

export const deleteContactController = async (req: Request, res: Response) => {
  const urlId: string = req.params.cid;
  const [status, respData] = await deleteContactService(urlId);
  return res.status(status).json(respData);
};
