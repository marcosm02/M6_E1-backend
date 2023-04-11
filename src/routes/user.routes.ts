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
import { listUsersController } from "../controllers/users/listUsers.controller";
import { getOneUserController } from "../controllers/users/getOneUser.controller";

export const usersRoutes = Router();

usersRoutes.get("/users", authMiddleware, listUsersController);
usersRoutes.post(
  "/users",
  verifyDuplicateUserMiddleware,
  validateDataMiddleware(userSchema),
  createUserController
);
usersRoutes.get(
  "/users/:uid",
  authMiddleware,
  isActiveMiddleware,
  isTargetUserActiveMiddleware,
  isOwnerMiddleware,
  getOneUserController
);
usersRoutes.patch(
  "/users/:uid",
  authMiddleware,
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
  isOwnerMiddleware,
  deleteUserController
);
