import { Request, Response } from "express";
import { Company } from "../models/company.model.js";
import { CompanyService } from "../services/company.service.js";

export class CompaniesController {
    static async getAll(req: Request, res: Response) {
        // #swagger.tags = ['Companies']
        // #swagger.summary = 'Obtenha todas as empresas cadastradas'
        // #swagger.description = 'Obtenha todas as empresas cadastradas.'
        res.send(await new CompanyService().getAll());
    }

    static async getById(req: Request, res: Response) {
        // #swagger.tags = ['Companies']
        // #swagger.summary = 'Busque uma empresa pelo id'
        // #swagger.description = 'Obtenha uma empresa pelo id.'
        const companyId = req.params.id;
        res.send(await new CompanyService().getById(companyId));
    }

    static async save(req: Request, res: Response) {
        // #swagger.tags = ['Companies']
        // #swagger.summary = 'Crie uma nova empresa'
        // #swagger.description = 'Crie uma nova empresa.'
        await new CompanyService().save(req.body);
        res.status(201).send({
            message: `Empresa criada com sucesso!`
        });
    }

    static async update(req: Request, res: Response) {
        // #swagger.tags = ['Companies']
        // #swagger.summary = 'Atualize os dados da empresa'
        // #swagger.description = 'Atualize os dados de uma empresa específica.'
        const companyId = req.params.id;
        const company = req.body as Company;
        await new CompanyService().update(companyId, company);
        res.send({
            message: "Empresa alterada com sucesso!"
        });
    }

}