import { Request, Response } from "express";
import { OrderService } from "../services/order.service.js";
import { Order, QueryParamsOrder } from "../models/order.model.js";

export class OrdersController {
    static async save(req: Request, res: Response) {
        // #swagger.tags = ['Orders']
        // #swagger.summary = 'Crie um novo pedido'
        // #swagger.description = 'Crie um novo pedido na empresa. Essa funcionalidade deverá ser usada pelo cliente para realização de pedidos sem a necessidade de cadastro na plataforma.'
        const order = new Order(req.body);
        await new OrderService().save(order);
        res.status(201).send({
            message: "Pedido criado com sucesso!"
        });
    }

    static async search(req: Request, res: Response) {
        // #swagger.tags = ['Orders']
        // #swagger.summary = 'Pesquisa de pedidos usando filtros'
        // #swagger.description = 'Pesquise pedidos usando filtros de: Empresa, Período de data e Status. Você pode usar apenas um filtro ou combinar todos na mesma busca.'
        const orders = await new OrderService().search(req.query as QueryParamsOrder);
        res.send(orders);
    }

    static async getItems(req: Request, res: Response) {
        // #swagger.tags = ['Orders']
        // #swagger.summary = 'Obtenha os itens de um pedido'
        // #swagger.description = 'Obtenha todos os itens de um pedido através id do pedido.'
        const items = await new OrderService().getItems(req.params.id);
        res.send(items);
    }

    static async getById(req: Request, res: Response) {
        // #swagger.tags = ['Orders']
        // #swagger.summary = 'Obtenha um pedido pelo id'
        // #swagger.description = 'Obtenha todos os dados de um pedido através do id, incluindo os itens.'
        res.send(await new OrderService().getById(req.params.id));
    }

    static async changeStatus(req: Request, res: Response) {
        // #swagger.tags = ['Orders']
        // #swagger.summary = 'Atualize o status do pedido'
        // #swagger.description = 'Atualize o status de um pedido através do id.'
        const pedidoId = req.params.id;
        const status = req.body.status;
        await new OrderService().changeStatus(pedidoId, status);
        res.status(204).end();
    }
}