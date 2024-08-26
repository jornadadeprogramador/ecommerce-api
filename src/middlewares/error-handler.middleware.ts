import express, {Request, Response, NextFunction} from "express";

export const errorHandler = (app: express.Express) => {
    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send({
            message: "Erro Interno do Servidor"
        });
    });
};