import {
  IContact,
  IContactRequest,
} from "../../interfaces/contacts/contacts.interfaces";
import AppDataSource from "../../data-source";
import { ContactEntity } from "../../entities/contacts.entity";
import { contactReturnedSchema } from "../../serializers/contacts/contacts.serializer";

export const createContactService = async (
  data: IContactRequest
): Promise<IContact> => {
  const contactRepo = AppDataSource.getRepository(ContactEntity);
  const contact = contactRepo.create(data);
  await contactRepo.save(contact);

  const contactReturned = await contactReturnedSchema.validate(contact, {
    stripUnknown: true,
  });

  return contactReturned;
};
