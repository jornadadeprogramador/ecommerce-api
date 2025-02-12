import { Request, Response } from "express";
import { PaymentMethodService } from "../services/payment-method.service.js";
import { PaymentMethod } from "../models/payment-method.model.js";

export class PaymentMethodsController {
    static async getAll(req: Request, res: Response) {
        // #swagger.tags = ['Payment Methods']
        // #swagger.summary = 'Obtenha todas as formas de pagamento cadastradas'
        // #swagger.description = 'Obtenha todas as formas de pagamento da empresa.'
        res.send(await new PaymentMethodService().getAll());
    }

    static async getById(req: Request, res: Response) {
        // #swagger.tags = ['Payment Methods']
        // #swagger.summary = 'Busque uma forma de pagamento pelo id'
        // #swagger.description = 'Obtenha uma forma de pagamento pelo id.'
        const paymentMethodId = req.params.id;
        res.send(await new PaymentMethodService().getById(paymentMethodId));
    }

    static async save(req: Request, res: Response) {
        // #swagger.tags = ['Payment Methods']
        // #swagger.summary = 'Crie uma nova forma de pagamento'
        // #swagger.description = 'Crie uma nova forma de pagamento para ser usada na rotina de pedidos.'
        /* #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/addPaymentMethod"
                        }  
                    }
                }
            }
        */
        await new PaymentMethodService().save(req.body);
        res.status(201).send({
            message: `Forma de Pagamento criada com sucesso!`
        });
    }

    static async update(req: Request, res: Response) {
        // #swagger.tags = ['Payment Methods']
        // #swagger.summary = 'Atualize os dados da forma de pagamento'
        // #swagger.description = 'Atualize os dados de uma forma de pagamento específica.'
        /* #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/updatePaymentMethod"
                        }  
                    }
                }
            }
        */
        const paymentMethodId = req.params.id;
        const paymentMethod = req.body as PaymentMethod;
        await new PaymentMethodService().update(paymentMethodId, paymentMethod);
        res.send({
            message: "Forma de Pagamento alterada com sucesso!"
        });
    }

    static async delete(req: Request, res: Response) {
        // #swagger.tags = ['Payment Methods']
        // #swagger.summary = 'Exclua uma forma de pagamento'
        // #swagger.description = 'Exclua uma forma de pagamento pelo id.'
        const paymentMethodId = req.params.id;
        await new PaymentMethodService().delete(paymentMethodId);
        res.status(204).end();
    }

}