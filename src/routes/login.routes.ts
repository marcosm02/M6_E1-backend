import { Router } from "express";
import { loginController } from "../controllers/login/login.controller";
import { isActiveMiddleware } from "../middlewares/isActive.middleware";

export const loginRoutes = Router();

loginRoutes.post("/login", isActiveMiddleware, loginController);
