import { Router } from "express";
import asyncHandler from "express-async-handler";
import { AuthController } from "../controllers/auth.controller";

export const authRoutes = Router();

authRoutes.post("/auth/login", asyncHandler(AuthController.login));