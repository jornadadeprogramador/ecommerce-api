import { Router } from "express";
import asyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { ProductsController } from "../controllers/products.controller.js";
import { newProductSchema, updateProductSchema } from "../models/product.model.js";

export const productRoutes = Router();

productRoutes.get("/products", asyncHandler(ProductsController.getAll));
productRoutes.get("/products/search", asyncHandler(ProductsController.search));
productRoutes.get("/products/:id", asyncHandler(ProductsController.getById));
productRoutes.post("/products", celebrate({ [Segments.BODY]: newProductSchema }), asyncHandler(ProductsController.save));
productRoutes.put("/products/:id", celebrate({ [Segments.BODY]: updateProductSchema }), asyncHandler(ProductsController.update));
productRoutes.delete("/products/:id", asyncHandler(ProductsController.delete));