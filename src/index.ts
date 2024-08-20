import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao Curso de Node.js");
});

let usuarios = [{
    nome: "Derci Santos",
    idade: 33
}, {
    nome: "João da Silva",
    idade: 44
}];

app.get("/users", (req: Request, res: Response) => {
    res.send(usuarios);
});

app.post("/users", (req: Request, res: Response) => {
    let user = req.body;
    usuarios.push(user);
    res.send({
        message: "Usuário criado com sucesso!"
    });
});

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});