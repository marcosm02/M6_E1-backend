import { Router } from "express";
import { createUserController } from "../controllers/users/users.controller";
import { verifyDuplicateUserMiddleware } from "../middlewares/verifyDuplicateUser.middleware";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import { isActiveMiddleware } from "../middlewares/isActive.middleware";
import {
  updateUserSchema,
  userSchema,
} from "../serializers/users/user.serializer";
import { authMiddleware } from "../middlewares/auth.middleware";
import { updateUserController } from "../controllers/users/update.controller";
import { deleteUserController } from "../controllers/users/delete.controller";

export const usersRoutes = Router();

usersRoutes.post(
  "/users",
  verifyDuplicateUserMiddleware,
  validateDataMiddleware(userSchema),
  createUserController
);
usersRoutes.patch(
  "/users/:id",
  validateDataMiddleware(updateUserSchema),
  isActiveMiddleware,
  authMiddleware,
  updateUserController
);
usersRoutes.delete(
  "/users/:id",
  isActiveMiddleware,
  authMiddleware,
  deleteUserController
);
