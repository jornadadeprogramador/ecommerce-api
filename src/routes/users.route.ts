import express from "express";
import { UsersController } from "../controllers/users.controller";

export const userRoutes = express.Router();

userRoutes.get("/users", UsersController.getAll);
userRoutes.get("/users/:id", UsersController.getById);
userRoutes.post("/users", UsersController.save);
userRoutes.put("/users/:id", UsersController.update);
userRoutes.delete("/users/:id", UsersController.delete);