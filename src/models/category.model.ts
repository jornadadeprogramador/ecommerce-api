import { Joi } from "celebrate";

export type Category = {
    id: string;
    descricao: string;
    ativa: boolean;
}

export const newCategorySchema = Joi.object().keys({
    descricao: Joi.string().trim().min(3).required(),
    ativa: Joi.boolean().only().allow(true).default(true)
});

export const updateCategorySchema = Joi.object().keys({
    descricao: Joi.string().trim().min(3).required(),
    ativa: Joi.boolean().required(),
});