import express, { Request, Response, NextFunction } from "express";
import { InternalServerError } from "../errors/internal-server.error";
import { errors } from "celebrate";
import { ErrorBase } from "../errors/base.error";

export const errorHandler = (app: express.Express) => {
    app.use(errors());
    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(error);
        if (error instanceof ErrorBase) {
            error.send(res);
        } else {
            new InternalServerError().send(res);
        }
    });
};