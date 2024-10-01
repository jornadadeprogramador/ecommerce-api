import { Router } from "express";
import asyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { PaymentMethodsController } from "../controllers/payment-methods.controller.js";
import { newPaymentSchema, updatePaymentSchema } from "../models/payment-method.model.js";

export const paymentMethodsRoutes = Router();

paymentMethodsRoutes.get("/payment-methods", asyncHandler(PaymentMethodsController.getAll));
paymentMethodsRoutes.get("/payment-methods/:id", asyncHandler(PaymentMethodsController.getById));
paymentMethodsRoutes.post("/payment-methods", celebrate({ [Segments.BODY]: newPaymentSchema }), asyncHandler(PaymentMethodsController.save));
paymentMethodsRoutes.put("/payment-methods/:id", celebrate({ [Segments.BODY]: updatePaymentSchema }), asyncHandler(PaymentMethodsController.update));
paymentMethodsRoutes.delete("/payment-methods/:id", asyncHandler(PaymentMethodsController.delete));