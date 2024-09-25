import { Request, Response } from "express";
import { OrderService } from "../services/order.service.js";
import { Order } from "../models/order.model.js";

export class OrdersController {
    static async save(req: Request, res: Response) {
        const order = req.body as Order;
        await new OrderService().save(order);
        res.status(201).send({
            message: "Pedido criado com sucesso!"
        });
    }

    static search(req: Request, res: Response) {
        console.log(req.query);
        res.send(req.query);
    }
}