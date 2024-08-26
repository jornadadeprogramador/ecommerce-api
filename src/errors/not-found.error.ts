import { ErrorBase } from "./base.error";

export class NotFoundError extends ErrorBase {

    constructor(message: string) {
        super(404, message);
    }
    
}