import { Request, Response } from "express";
import { Category } from "../models/category.model.js";
import { CategoryService } from "../services/category.service.js";

export class CategoriesController {
    static async getAll(req: Request, res: Response) {
        // #swagger.tags = ['Categories']
        res.send(await new CategoryService().getAll());
    }

    static async getById(req: Request, res: Response) {
        // #swagger.tags = ['Categories']
        const categoryId = req.params.id;
        res.send(await new CategoryService().getById(categoryId));
    }

    static async save(req: Request, res: Response) {
        // #swagger.tags = ['Categories']
        await new CategoryService().save(req.body);
        res.status(201).send({
            message: `Categoria criada com sucesso!`
        });
    }

    static async update(req: Request, res: Response) {
        // #swagger.tags = ['Categories']
        const categoryId = req.params.id;
        const category = req.body as Category;
        await new CategoryService().update(categoryId, category);
        res.send({
            message: "Categoria alterada com sucesso!"
        });
    }

    static async delete(req: Request, res: Response) {
        // #swagger.tags = ['Categories']
        const categoryId = req.params.id;
        await new CategoryService().delete(categoryId);
        res.status(204).end();
    }

}