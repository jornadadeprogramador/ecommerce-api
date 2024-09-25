import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import { newOrderSchema, searchParamsOrderQuerySchema as searchOrderQuerySchema } from "../models/order.model.js";
import { OrdersController } from "../controllers/orders.controller.js";
import expressAsyncHandler from "express-async-handler";

export const orderRoutes = Router();

orderRoutes.post("/orders", celebrate({ [Segments.BODY]: newOrderSchema }), expressAsyncHandler(OrdersController.save));
orderRoutes.get("/orders", celebrate({[Segments.QUERY]: searchOrderQuerySchema}), expressAsyncHandler(OrdersController.search));