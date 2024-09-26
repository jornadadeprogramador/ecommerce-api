import { Joi } from "celebrate";
import { Company } from "./company.model.js";
import { Customer, customerSchema } from "./customer.model.js";
import { OrderItem, orderItemSchema } from "./order-item.model.js";
import { PaymentMethod } from "./payment-method.model.js";
import { Address, orderAddressSchema } from "./address.model.js";
import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, Timestamp } from "firebase-admin/firestore";

export class Order {
    id: string;
    empresa: Company;
    cliente: Customer;
    endereco: Address;
    cpfCnpjCupom: string;
    data: Date;
    isEntrega: boolean;
    formaPagamento: PaymentMethod;
    taxaEntrega: number;
    items: OrderItem[];
    status: OrderStatus;

    constructor(data: any) {
        this.id = data.id;
        this.empresa = data.empresa;
        this.cliente = data.cliente;
        this.endereco = data.endereco;
        this.cpfCnpjCupom = data.cpfCnpjCupom;
        if (data.data instanceof Timestamp) {
            this.data = data.data.toDate();
        } else {
            this.data = data.data;
        }
        this.isEntrega = data.isEntrega;
        this.formaPagamento = data.formaPagamento;
        this.taxaEntrega = data.taxaEntrega;
        this.items = data.items;
        this.status = data.status ?? OrderStatus.pendente;
    }
};

export enum OrderStatus {
    pendente = 'pendente',
    aprovado = 'aprovado',
    entrega = 'entrega',
    concluido = 'concluido',
    cancelado = 'cancelado'
};

export const newOrderSchema = Joi.object().keys({
    empresa: Joi.object().keys({
        id: Joi.string().trim().required()
    }).required(),
    cliente: customerSchema.required(),
    endereco: Joi.alternatives().conditional(
        "isEntrega", {
        is: true,
        then: orderAddressSchema.required(),
        otherwise: Joi.object().only().allow(null).default(null)
    }
    ),
    cpfCnpjCupom: Joi.alternatives().try(
        Joi.string().length(11).required(),
        Joi.string().length(14).required()
    ).default(null),
    isEntrega: Joi.boolean().required(),
    formaPagamento: Joi.object().keys({
        id: Joi.string().trim().required()
    }).required(),
    taxaEntrega: Joi.number().min(0).required(),
    items: Joi.array().min(1).items(orderItemSchema).required(),
    status: Joi.string().only().allow(OrderStatus.pendente).default(OrderStatus.pendente)
});

export type QueryParamsOrder = {
    empresaId?: string;
    dataInicio?: Date;
    dataFim?: Date;
    status?: OrderStatus;
}

export const searchParamsOrderQuerySchema = Joi.object().keys({
    empresaId: Joi.string().trim(),
    dataInicio: Joi.date(),
    dataFim: Joi.date(),
    status: Joi.string().only().allow(...Object.values(OrderStatus))
});

export const orderConverter: FirestoreDataConverter<Order> = {
    toFirestore: (order: Order): DocumentData => {
        return {
            empresa: {
                id: order.empresa.id,
                logomarca: order.empresa.logomarca,
                cpfCnpj: order.empresa.cpfCnpj,
                razaoSocial: order.empresa.razaoSocial,
                nomeFantasia: order.empresa.nomeFantasia,
                telefone: order.empresa.telefone,
                endereco: order.empresa.endereco,
                localizacao: order.empresa.localizacao
            },
            cliente: {
                nome: order.cliente.nome,
                telefone: order.cliente.telefone
            },
            endereco: {
                cep: order.endereco.cep,
                logradouro: order.endereco.logradouro,
                numero: order.endereco.numero,
                complemento: order.endereco.complemento,
                cidade: order.endereco.cidade,
                uf: order.endereco.uf
            },
            cpfCnpjCupom: order.cpfCnpjCupom,
            data: order.data,
            isEntrega: order.isEntrega,
            formaPagamento: {
                id: order.formaPagamento.id,
                descricao: order.formaPagamento.descricao
            },
            taxaEntrega: order.empresa.taxaEntrega,
            items: order.items.map(item => {
                return {
                    produto: {
                        id: item.produto.id,
                        nome: item.produto.nome,
                        descricao: item.produto.descricao,
                        preco: item.produto.preco,
                        imagem: item.produto.imagem,
                        categoria: {
                            id: item.produto.categoria.id,
                            descricao: item.produto.categoria.descricao
                        }
                    },
                    qtde: item.qtde,
                    observacao: item.observacao
                }
            }),
            status: order.status
        };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot): Order => {
        return new Order({
            id: snapshot.id,
            ...snapshot.data()
        });
    }
}