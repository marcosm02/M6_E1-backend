import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUser,
  IUserRequest,
  IUserUpdate,
} from "../../interfaces/users/users.interfaces";
import { contactReturnedSchema } from "../contacts/contacts.serializer";

export const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  telephone: yup.string().required(),
});

export const userReturnedSchema: SchemaOf<IUser> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string().email(),
  telephone: yup.string(),
  isActive: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
  contacts: yup.array(contactReturnedSchema),
});

export const updateUserSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string(),
  telephone: yup.string(),
  isActive: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});
