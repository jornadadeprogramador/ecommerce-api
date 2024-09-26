import { CollectionReference, getFirestore } from "firebase-admin/firestore";
import { Company, companyConverter } from "../models/company.model.js";

export class CompanyRepository {

    private collection: CollectionReference;

    constructor() {
        this.collection = getFirestore().collection("companies");
    }

    async getAll(): Promise<Company[]> {
        const snapshot = await this.collection.withConverter(companyConverter).get();
        return snapshot.docs.map(doc => doc.data());
    }

    async getById(id: string): Promise<Company | null> {
        const doc = await this.collection.withConverter(companyConverter).doc(id).get();
        return doc.data() ?? null;
    }

    async save(company: Company) {
        await this.collection.withConverter(companyConverter).add(company);
    }

    async update(company: Company) {
        await this.collection
            .withConverter(companyConverter)
            .doc(company.id)
            .set(company);
    }

}