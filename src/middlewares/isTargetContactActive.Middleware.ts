import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { ContactEntity } from "../entities/contacts.entity";

export const isTargetContactActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepo = AppDataSource.getRepository(ContactEntity);
  const contact = await contactRepo.findOneBy({
    id: req.params.cid,
  });
  if (!contact) {
    return res.status(401).json({ message: "Contact not found" });
  }
  if (!contact.isActive) {
    return res.status(400).json({ message: "Contact does not exist" });
  }
  next();
};
