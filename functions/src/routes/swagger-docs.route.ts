import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./../docs/swagger-output.json" assert {type: "json"};

export const swaggerDocs = (app: Express) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
}