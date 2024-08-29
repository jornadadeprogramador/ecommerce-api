import { getFirestore } from "firebase-admin/firestore";
import { User } from "../models/user.model";

export class UserRepository {

    async getAll(): Promise<User[]> {
        const snapshot = await getFirestore().collection("users").get();
        return snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            };
        }) as User[];
    }

}