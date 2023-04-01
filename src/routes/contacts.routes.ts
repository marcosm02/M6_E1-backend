import { Router } from "express";
import { isActiveByIdMiddleware } from "../middlewares/isActiveById.middleware";
import { isTargetUserActiveMiddleware } from "../middlewares/isTargetUserActive.middleware";
import { isTargetContactActiveMiddleware } from "../middlewares/isTargetContactActive.Middleware";
import { isOwnerMiddleware } from "../middlewares/isOwner.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import {
  contactSchema,
  updateContactSchema,
} from "../serializers/contacts/contacts.serializer";
import { createContactController } from "../controllers/contacts/createContacts.controller";
import { listContactsController } from "../controllers/contacts/listContacts.controller";
import { listOneContactController } from "../controllers/contacts/listOneContact.controller";
import { updateContactController } from "../controllers/contacts/updateContact.controller";
import { deleteContactController } from "../controllers/contacts/deleteContact.controller";

export const contactsRoutes = Router();

contactsRoutes.get(
  "/users/:uid/contacts",
  authMiddleware,
  isActiveByIdMiddleware,
  isTargetUserActiveMiddleware,
  isOwnerMiddleware,
  listContactsController
);
contactsRoutes.post(
  "/users/:uid/contacts",
  authMiddleware,
  isActiveByIdMiddleware,
  isTargetUserActiveMiddleware,
  isOwnerMiddleware,
  validateDataMiddleware(contactSchema),
  createContactController
);
contactsRoutes.get(
  "/users/:uid/contacts/:cid",
  authMiddleware,
  isActiveByIdMiddleware,
  isTargetUserActiveMiddleware,
  isTargetContactActiveMiddleware,
  isOwnerMiddleware,
  listOneContactController
);
contactsRoutes.patch(
  "/users/:uid/contacts/:cid",
  authMiddleware,
  isActiveByIdMiddleware,
  isTargetUserActiveMiddleware,
  isTargetContactActiveMiddleware,
  isOwnerMiddleware,
  validateDataMiddleware(updateContactSchema),
  updateContactController
);
contactsRoutes.delete(
  "/users/:uid/contacts/:cid",
  authMiddleware,
  isActiveByIdMiddleware,
  isTargetUserActiveMiddleware,
  isTargetContactActiveMiddleware,
  isOwnerMiddleware,
  deleteContactController
);
