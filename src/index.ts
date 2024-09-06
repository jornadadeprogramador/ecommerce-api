import express from "express";
import { initializeApp as initializeAdminApp } from "firebase-admin/app";
import { initializeApp as initializeFirebaseApp } from "firebase/app";
import { routes } from "./routes/index";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { pageNotFoundHandler } from "./middlewares/page-not-found.middleware";
import { auth } from "./middlewares/auth.middleware";

initializeAdminApp();
initializeFirebaseApp({
    apiKey: process.env.FIRE_API_KEY
});
const app = express();
auth(app);
routes(app);
pageNotFoundHandler(app);
errorHandler(app);

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});