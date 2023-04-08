import {
  IContact,
  IContactRequest,
} from "../../interfaces/contacts/contacts.interfaces";
import AppDataSource from "../../data-source";
import { ContactEntity } from "../../entities/contacts.entity";
import { UserEntity } from "../../entities/user.entity";
import { contactReturnedSchema } from "../../serializers/contacts/contacts.serializer";

export const createContactService = async (
  data: IContactRequest,
  userId: string
): Promise<IContact> => {
  const contactRepo = AppDataSource.getRepository(ContactEntity);
  const contact = contactRepo.create(data);
  const userRepo = AppDataSource.getRepository(UserEntity);
  const user = await userRepo.findOneBy({ id: userId });
  contact.user = user;
  await contactRepo.save(contact);

  const contactReturned = await contactReturnedSchema.validate(contact, {
    stripUnknown: true,
  });

  return contactReturned;
};
