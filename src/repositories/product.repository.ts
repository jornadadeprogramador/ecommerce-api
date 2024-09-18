import { CollectionReference, getFirestore } from "firebase-admin/firestore";
import { Product } from "../models/product.model.js";

export class ProductRepository {

    private collection: CollectionReference;

    constructor() {
        this.collection = getFirestore().collection("products");
    }

    async getAll(): Promise<Product[]> {
        const snapshot = await this.collection.get();
        return snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            };
        }) as Product[];
    }

    async getById(id: string): Promise<Product | null> {
        const doc = await this.collection.doc(id).get();
        if (doc.exists) {
            return {
                id: doc.id,
                ...doc.data()
            } as Product;
        } else {
            return null;
        }
    }

    async save(product: Product) {
        await this.collection.add(product);
    }

    async update(product: Product) {
        let docRef = this.collection.doc(product.id!);
        await docRef.set({
            descricao: product.descricao,
            ativa: product.ativa
        });
    }

    async delete(id: string) {
        await this.collection.doc(id).delete();
    }
}