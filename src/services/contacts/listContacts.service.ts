import AppDataSource from "../../data-source";
import { ContactEntity } from "../../entities/contacts.entity";

export const listContactsService = async (): Promise<any> => {
  const contactsRepo = AppDataSource.getRepository(ContactEntity);
  const contacts = await contactsRepo.find();
  if (contacts.length == 0) {
    return [404, { message: "There are no registered contacts for this user" }];
  }
  const activeContacts = contacts.filter((el) => el.isActive !== false);
  return [200, activeContacts];
};
