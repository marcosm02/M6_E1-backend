import { Router } from "express";
import { verifyDuplicateUserMiddleware } from "../middlewares/verifyDuplicateUser.middleware";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import { isActiveMiddleware } from "../middlewares/isActive.middleware";
import { isTargetUserActiveMiddleware } from "../middlewares/isTargetUserActive.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { isOwnerMiddleware } from "../middlewares/isOwner.middleware";
import {
  updateUserSchema,
  userSchema,
} from "../serializers/users/user.serializer";
import { createUserController } from "../controllers/users/createUser.controller";
import { updateUserController } from "../controllers/users/updateUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";

export const usersRoutes = Router();

usersRoutes.post(
  "/users",
  verifyDuplicateUserMiddleware,
  validateDataMiddleware(userSchema),
  createUserController
);
usersRoutes.patch(
  "/users/:uid",
  authMiddleware,
  isActiveMiddleware,
  isTargetUserActiveMiddleware,
  isOwnerMiddleware,
  validateDataMiddleware(updateUserSchema),
  updateUserController
);
usersRoutes.delete(
  "/users/:uid",
  authMiddleware,
  isActiveMiddleware,
  isTargetUserActiveMiddleware,
  deleteUserController
);
