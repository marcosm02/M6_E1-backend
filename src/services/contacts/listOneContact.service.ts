import AppDataSource from "../../data-source";
import { ContactEntity } from "../../entities/contacts.entity";

export const listoOneContactService = async (urlId: string): Promise<any> => {
  const contactsRepo = AppDataSource.getRepository(ContactEntity);
  const contact = await contactsRepo.findOneBy({ id: urlId });
  if (!contact) {
    return [404, { message: "Contact not found" }];
  }
  return [200, contact];
};
