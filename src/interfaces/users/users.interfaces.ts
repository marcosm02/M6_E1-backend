import { IContact } from "../contacts/contacts.interfaces";

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  telephone: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  contacts: IContact[];
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  telephone?: string;
}
