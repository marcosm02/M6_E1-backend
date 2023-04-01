import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContact,
  IContactRequest,
} from "../../interfaces/contacts/contacts.interfaces";

export const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string().required(),
});

export const contactReturnedSchema: SchemaOf<IContact> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string().email(),
  telephone: yup.string(),
  isActive: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});
