import { EmailAlreadyExistsError } from "../errors/email-already-exists.error";
import { User } from "../models/user.model";
import { FirebaseAuthError, getAuth, UserRecord } from "firebase-admin/auth";
import { getAuth as getFirebaseAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

export class AuthService {

    async create(user: User): Promise<UserRecord> {
        try {
            return await getAuth().createUser({
                email: user.email,
                password: user.password,
                displayName: user.nome,
            });
        } catch (err) {
            if (err instanceof FirebaseAuthError && err.code === "auth/email-already-exists") {
                throw new EmailAlreadyExistsError();
            }
            throw err;
        }
    }

    login(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(getFirebaseAuth(), email, password);
    }
}