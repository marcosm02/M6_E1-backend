import AppDataSource from "../../data-source";
import { ContactEntity } from "../../entities/contacts.entity";

export const deleteContactService = async (urlId: string): Promise<any> => {
  const contactRepo = AppDataSource.getRepository(ContactEntity);
  const contact = await contactRepo.findOneBy({ id: urlId });

  if (!contact) {
    return [404, { message: "Contact not found" }];
  }

  contact.isActive = false;
  await contactRepo.save(contact);
  return [204, {}];
};
