import { CollectionReference, getFirestore } from "firebase-admin/firestore";
import { Order, QueryParamsOrder } from "../models/order.model.js";

export class OrderRepository {

    private collection: CollectionReference;

    constructor() {
        this.collection = getFirestore().collection('orders');
    }

    async save(order: Order) {
        await this.collection.add(order);
    }

    async search(query: QueryParamsOrder): Promise<Order[]> {
        const snapshot = await this.collection.get();
        return snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            } as unknown;
        }) as Order[];
    }
    
}