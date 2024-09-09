import { Router } from "express";
import { CompaniesController } from "../controllers/companies.controller";
import asyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { newUserSchema, updateUserSchema } from "../models/user.model";

export const companyRoutes = Router();

companyRoutes.get("companies/", asyncHandler(CompaniesController.getAll));
companyRoutes.get("/companies/:id", asyncHandler(CompaniesController.getById));
companyRoutes.post("/companies", celebrate({ [Segments.BODY]: newUserSchema }), asyncHandler(CompaniesController.save));
companyRoutes.put("/companies/:id", celebrate({ [Segments.BODY]: updateUserSchema }), asyncHandler(CompaniesController.update));