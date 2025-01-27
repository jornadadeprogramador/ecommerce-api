import { Joi } from "celebrate";
import { phoneRegexPattern } from "../utils/regex-utils.js";
import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot } from "firebase-admin/firestore";
import { validator } from "cpf-cnpj-validator";

export class Company {
    id: string;
    logomarca: string;
    cpfCnpj: string;
    razaoSocial: string;
    nomeFantasia: string;
    telefone: string;
    horarioFuncionamento: string;
    endereco: string;
    localizacao: string;
    taxaEntrega: number;
    ativa: boolean;

    constructor(data: Company | any) {
        this.id = data.id;
        this.logomarca = data.logomarca;
        this.cpfCnpj = data.cpfCnpj;
        this.razaoSocial = data.razaoSocial;
        this.nomeFantasia = data.nomeFantasia;
        this.telefone = data.telefone;
        this.horarioFuncionamento = data.horarioFuncionamento;
        this.endereco = data.endereco;
        this.localizacao = data.localizacao;
        this.taxaEntrega = data.taxaEntrega;
        this.ativa = data.ativa ?? true;
    }
}

const cpfCnpjValidator = Joi.extend(validator);
const cpfCnpjSchemaValidator = Joi.alternatives().try(
    cpfCnpjValidator.document().cpf(),
    cpfCnpjValidator.document().cnpj()
).required().messages({
    "alternatives.match": "CPF ou CNPJ inválido"
})

export const newCompanySchema = Joi.object().keys({
    logomarca: Joi.string().base64().required(),
    cpfCnpj: cpfCnpjSchemaValidator,
    razaoSocial: Joi.string().trim().required(),
    nomeFantasia: Joi.string().trim().required(),
    telefone: Joi.string().regex(phoneRegexPattern).required(),
    horarioFuncionamento: Joi.string().trim().required(),
    endereco: Joi.string().trim().required(),
    localizacao: Joi.string().trim().required(),
    taxaEntrega: Joi.number().required(),
    ativa: Joi.boolean().only().allow(true).default(true)
});

export const updateCompanySchema = Joi.object().keys({
    logomarca: Joi.alternatives().try(
        Joi.string().base64().required(),
        Joi.string().uri().required(),
    ).required(),
    cpfCnpj: cpfCnpjSchemaValidator,
    razaoSocial: Joi.string().trim().required(),
    nomeFantasia: Joi.string().trim().required(),
    telefone: Joi.string().regex(phoneRegexPattern).required(),
    horarioFuncionamento: Joi.string().trim().required(),
    endereco: Joi.string().trim().required(),
    localizacao: Joi.string().trim().trim().required(),
    taxaEntrega: Joi.number().required(),
    ativa: Joi.boolean().required()
});

export const companyConverter: FirestoreDataConverter<Company> = {
    toFirestore: (company: Company): DocumentData => {
        return {
            logomarca: company.logomarca,
            cpfCnpj: company.cpfCnpj,
            razaoSocial: company.razaoSocial,
            nomeFantasia: company.nomeFantasia,
            telefone: company.telefone,
            horarioFuncionamento: company.horarioFuncionamento,
            endereco: company.endereco,
            localizacao: company.localizacao,
            taxaEntrega: company.taxaEntrega,
            ativa: company.ativa
        };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot): Company => {
        return new Company({
            id: snapshot.id,
            ...snapshot.data()
        });
    }
}