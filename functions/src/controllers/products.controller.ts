import { Request, Response } from "express";
import { Product } from "../models/product.model.js";
import { ProductService } from "../services/product.service.js";

export class ProductsController {
    static async getAll(req: Request, res: Response) {
        // #swagger.tags = ['Products']
        // #swagger.summary = 'Obtenha todas os produtos cadastradas'
        // #swagger.description = 'Obtenha todos os produtos da empresa.'
        res.send(await new ProductService().getAll());
    }

    static async search(req: Request, res: Response) {
        // #swagger.tags = ['Products']
        // #swagger.summary = 'Filtre os produtos pela categoria'
        // #swagger.description = 'Obtenha todos os produtos vinculados a uma categoria específica.'
        const categoriaId = req.query.categoriaId as string;
        res.send(await new ProductService().search(categoriaId));
    }

    static async getById(req: Request, res: Response) {
        // #swagger.tags = ['Products']
        // #swagger.summary = 'Busque um produto pelo id'
        // #swagger.description = 'Obtenha um produto pelo id.'
        const productId = req.params.id;
        res.send(await new ProductService().getById(productId));
    }

    static async save(req: Request, res: Response) {
        // #swagger.tags = ['Products']
        // #swagger.summary = 'Crie um novo produto'
        // #swagger.description = 'Adicione um novo produto ao catálogo de produtos da empresa.'
        await new ProductService().save(req.body);
        res.status(201).send({
            message: `Produto criado com sucesso!`
        });
    }

    static async update(req: Request, res: Response) {
        // #swagger.tags = ['Products']
        // #swagger.summary = 'Atualize os dados do produto'
        // #swagger.description = 'Atualize os dados de um produto específico.'
        const productId = req.params.id;
        const product = req.body as Product;
        await new ProductService().update(productId, product);
        res.send({
            message: "Produto alterado com sucesso!"
        });
    }

    static async delete(req: Request, res: Response) {
        // #swagger.tags = ['Products']
        // #swagger.summary = 'Exclua um produto'
        // #swagger.description = 'Exclua um produto pelo id.'
        const productId = req.params.id;
        await new ProductService().delete(productId);
        res.status(204).end();
    }

}