import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contacts/contacts.interfaces";
import { createContactService } from "../../services/contacts/createContacts.service";

export const createContactController = async (req: Request, res: Response) => {
  const contact: IContactRequest = req.body;
  const newContact = await createContactService(contact);
  return res.status(201).json(newContact);
};
