import AppDataSource from "../../data-source";
import { ContactEntity } from "../../entities/contacts.entity";
import { IContactUpdate } from "../../interfaces/contacts/contacts.interfaces";
import { contactReturnedSchema } from "../../serializers/contacts/contacts.serializer";

export const updateContactService = async (
  data: IContactUpdate,
  urlId: string
): Promise<any> => {
  const contactRepo = AppDataSource.getRepository(ContactEntity);
  const contact = await contactRepo.findOneBy({ id: urlId });
  if (!contact) {
    return [404, { message: "Contact not found" }];
  }

  const validateData = Object.keys(data);
  if (
    validateData.includes("id") ||
    validateData.includes("isActive") ||
    validateData.includes("createdAt") ||
    validateData.includes("updatedAt") ||
    validateData.includes("user")
  ) {
    return [401, { message: "Change not allowed" }];
  }

  const updatedContact = contactRepo.create({
    ...contact,
    ...data,
  });
  await contactRepo.save(updatedContact);
  const updatedContactResp = await contactReturnedSchema.validate(
    updatedContact,
    {
      stripUnknown: true,
    }
  );

  return [200, updatedContactResp];
};
