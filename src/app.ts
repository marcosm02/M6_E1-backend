import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { usersRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import { contactsRoutes } from "./routes/contacts.routes";

const app = express();
app.use(express.json());

app.use("", usersRoutes);
app.use("", loginRoutes);
app.use("", contactsRoutes);

export default app;
