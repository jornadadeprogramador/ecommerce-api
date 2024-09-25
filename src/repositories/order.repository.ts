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

    async search(queryParams: QueryParamsOrder): Promise<Order[]> {
        let query: FirebaseFirestore.Query = this.collection;
        
        if (queryParams.empresaId) {
            query = query.where("empresa.id", "==", queryParams.empresaId);
        }
        
        if (queryParams.dataInicio) {
            query = query.where("data", ">=", queryParams.dataInicio);
        }
        
        if (queryParams.dataFim) {
            query = query.where("data", "<=", queryParams.dataFim);
        }

        if (queryParams.status) {
            query = query.where("status", "==", queryParams.status);
        }

        const snapshot = await query.get();
        return snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            } as unknown;
        }) as Order[];
    }
    
}