import { Request, Response } from "express";
import { User } from "../models/user.model.js";
import { UserService } from "../services/user.service.js";

export class UsersController {
    static async getAll(req: Request, res: Response) {
        // #swagger.tags = ['Users']
        // #swagger.summary = 'Obtenha todos os usuários cadastrados'
        // #swagger.description = 'Obtenha todos os usuários da empresa.'
        /*
            #swagger.responses[200] = {
                description: 'Lista de todos os usuários',
                content: {
                    "application/json": {
                        schema: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    id: {
                                        type: 'string'
                                    },
                                    nome: {
                                        type: 'string'
                                    },
                                    email: {
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            }
         */
        res.send(await new UserService().getAll());
    }

    static async getById(req: Request, res: Response) {
        // #swagger.tags = ['Users']
        // #swagger.summary = 'Busque um usuário pelo id'
        // #swagger.description = 'Obtenha um usuário pelo id.'
        // #swagger.parameters['id'] = { description: 'Id do usuário' }
        /*
            #swagger.responses[200] = {
                description: 'Dados do usuário',
                content: {
                    "application/json": {
                        schema: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'string'
                                },
                                nome: {
                                    type: 'string'
                                },
                                email: {
                                    type: 'string'
                                }
                            }
                        }
                    }
                }
            }
         */
        const userId = req.params.id;
        res.send(await new UserService().getById(userId));
    }

    static async save(req: Request, res: Response) {
        // #swagger.tags = ['Users']
        // #swagger.summary = 'Crie um novo usuário'
        // #swagger.description = 'Crie um novo usuário para acessar as funcionalidades da empresa.'
        /* #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/addUser"
                        }  
                    }
                }
            }
        */
        await new UserService().save(req.body);
        res.status(201).send({
            message: `Usuário criado com sucesso!`
        });
    }

    static async update(req: Request, res: Response) {
        // #swagger.tags = ['Users']
        // #swagger.summary = 'Atualize os dados do usuário'
        // #swagger.description = 'Atualize os dados de um usuário específico.'
        /*  #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/updateUser"
                        }  
                    }
                }
            }
        */
        const userId = req.params.id;
        const user = req.body as User;
        await new UserService().update(userId, user);
        res.send({
            message: "Usuário alterado com sucesso!"
        });
    }

    static async delete(req: Request, res: Response) {
        // #swagger.tags = ['Users']
        // #swagger.summary = 'Exclua um usuário'
        // #swagger.description = 'Exclua um usuário pelo id.<br><br><b>Obs.:</b> <i>Essa ação é irreversível. Após excluído não será possível recuperar os dados do usuário.</i>'
        const userId = req.params.id;
        await new UserService().delete(userId);
        res.status(204).end();
    }
}