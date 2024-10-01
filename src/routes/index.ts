import express from "express";
import { userRoutes } from "./users.route.js";
import { authRoutes } from "./auth.route.js";
import { companyRoutes } from "./companies.route.js";
import { categoryRoutes } from "./categories.route.js";
import { productRoutes } from "./products.route.js";
import { paymentMethodsRoutes } from "./payment-methods.route.js";
import { orderRoutes } from "./orders.route.js";
import { allowAnonymousUser } from "../middlewares/allow-anonymous-user.middleware.js";

export const routes = (app: express.Express) => {
    app.use(express.json({ limit: "5mb" }));
    app.use(allowAnonymousUser);
    app.use(authRoutes);
    app.use(userRoutes);
    app.use(companyRoutes);
    app.use(categoryRoutes);
    app.use(productRoutes);
    app.use(paymentMethodsRoutes);
    app.use(orderRoutes);
}