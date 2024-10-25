import { Joi } from "celebrate";
import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot } from "firebase-admin/firestore";

export class User {
    id: string;
    nome: string;
    email: string;
    password?: string;

    constructor(data: User | any) {
        this.id = data.id;
        this.nome = data.nome;
        this.email = data.email;
        this.password = data.password;
    }
};

export const newUserSchema = Joi.object().keys({
    nome: Joi.string().trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

export const updateUserSchema = Joi.object().keys({
    nome: Joi.string().trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6)
});

export const authLoginSchema = Joi.object().keys({
    email: Joi.string().email().required().messages({
        "any.required": "O e-mail é obrigatório",
        "string.email": "O e-mail é inválido"
    }),
    password: Joi.string().min(6).required().messages({
        "any.required": "A senha é obrigatória",
        "string.min": "A senha precisa ter pelo menos 6 caracteres"
    })
});

export const authRecoverySchema = Joi.object().keys({
    email: Joi.string().email().required()
});

export const userConverter: FirestoreDataConverter<User> = {
    toFirestore: (user: User): DocumentData => {
        return {
            nome: user.nome,
            email: user.email
        }
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot): User => {
        return new User({
            id: snapshot.id,
            ...snapshot.data()
        });
    }
}