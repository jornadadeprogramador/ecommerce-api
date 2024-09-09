import { Router } from "express";
import { CompaniesController } from "../controllers/companies.controller";
import asyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { companySchema } from "../models/company.model";

export const companyRoutes = Router();

companyRoutes.get("companies/", asyncHandler(CompaniesController.getAll));
companyRoutes.get("/companies/:id", asyncHandler(CompaniesController.getById));
companyRoutes.post("/companies", celebrate({ [Segments.BODY]: companySchema }), asyncHandler(CompaniesController.save));
companyRoutes.put("/companies/:id", celebrate({ [Segments.BODY]: companySchema }), asyncHandler(CompaniesController.update));