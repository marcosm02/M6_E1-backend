import { Request, Response } from "express";
import { IContactUpdate } from "../../interfaces/contacts/contacts.interfaces";
import { updateContactService } from "../../services/contacts/updateContact.service";

export const updateContactController = async (req: Request, res: Response) => {
  const data: IContactUpdate = req.body;
  const urlId: string = req.params.cid;
  const [status, respData] = await updateContactService(data, urlId);
  return res.status(status).json(respData);
};
