import { Request, Response, NextFunction } from "express";
import { ForbiddenError } from "../errors/forbidden.error.js";

export const allowAnonymousUser = (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
        return next();
    }

    if (req.method === "GET") {
        // Empresas
        // Produtos
        // Categorias
        // Formas de Pagamento
        // Pedido pelo ID
        if (req.url === "/companies" ||
            req.url === "/products" ||
            req.url === "/categories" ||
            req.url === "/payment-methods" ||
            req.url.startsWith("/orders/")
        ) {
            return next();
        }
    } else if (req.method === "POST") {
        if (req.url === "/orders") {
            return next();
        }
    }

    next(new ForbiddenError("Você não possui permissão para acessar esse recurso!"));
}