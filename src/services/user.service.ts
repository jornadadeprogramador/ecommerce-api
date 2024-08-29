import { getFirestore } from "firebase-admin/firestore";
import { User } from "../models/user.model";
import { NotFoundError } from "../errors/not-found.error";
import { UserRepository } from "../repositories/user.repository";

export class UserService {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAll(): Promise<User[]> {
        return this.userRepository.getAll();
    }

    async getById(id: string): Promise<User> {
        const doc = await getFirestore().collection("users").doc(id).get();
        if (doc.exists) {
            return {
                id: doc.id,
                ...doc.data()
            } as User;
        } else {
            throw new NotFoundError("Usuário não encontrado!");
        }
    }

    async save(user: User) {
        await getFirestore().collection("users").add(user);
    }

    async update(id: string, user: User) {
        let docRef = getFirestore().collection("users").doc(id);
        if ((await docRef.get()).exists) {
            await docRef.set({
                nome: user.nome,
                email: user.email
            });
        } else {
            throw new NotFoundError("Usuário não encontrado!");
        }
    }

    async delete(id: string) {
        await getFirestore().collection("users").doc(id).delete();
    }

}