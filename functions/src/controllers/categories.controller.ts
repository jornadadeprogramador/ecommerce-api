import { Request, Response } from "express";
import { Category } from "../models/category.model.js";
import { CategoryService } from "../services/category.service.js";

export class CategoriesController {
    static async getAll(req: Request, res: Response) {
        // #swagger.tags = ['Categories']
        // #swagger.summary = 'Obtenha todas as categorias cadastradas'
        // #swagger.description = 'Obtenha todas as categorias de produto da empresa.'
        res.send(await new CategoryService().getAll());
    }

    static async getById(req: Request, res: Response) {
        // #swagger.tags = ['Categories']
        // #swagger.summary = 'Busque uma categoria de produto pelo id'
        // #swagger.description = 'Obtenha uma categoria de produto pelo id.'
        const categoryId = req.params.id;
        res.send(await new CategoryService().getById(categoryId));
    }

    static async save(req: Request, res: Response) {
        // #swagger.tags = ['Categories']
        // #swagger.summary = 'Crie uma nova categoria de produto'
        // #swagger.description = 'Crie uma nova categoria para ser usada no cadastro de produtos.'
        await new CategoryService().save(req.body);
        res.status(201).send({
            message: `Categoria criada com sucesso!`
        });
    }

    static async update(req: Request, res: Response) {
        // #swagger.tags = ['Categories']
        // #swagger.summary = 'Atualize os dados da categoria'
        // #swagger.description = 'Atualize os dados de uma categoria de produto específica.'
        const categoryId = req.params.id;
        const category = req.body as Category;
        await new CategoryService().update(categoryId, category);
        res.send({
            message: "Categoria alterada com sucesso!"
        });
    }

    static async delete(req: Request, res: Response) {
        // #swagger.tags = ['Categories']
        // #swagger.summary = 'Exclua uma categoria de produto'
        // #swagger.description = 'Exclua uma categoria de produto pelo id.<br><br><b>Obs.:</b> <i>Só é possível excluir categorias que não tem produtos vinculados.</i>'
        const categoryId = req.params.id;
        await new CategoryService().delete(categoryId);
        res.status(204).end();
    }

}