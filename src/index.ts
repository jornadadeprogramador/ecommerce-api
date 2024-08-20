import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao Curso de Node.js");
});

type User = {
    id: number; 
    nome: string;
    email: string;
};
let id = 0;
let usuarios: User[] = [];

app.get("/users", (req: Request, res: Response) => {
    res.send(usuarios);
});

app.get("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let user = usuarios.find(user => user.id === userId);
    res.send(user);
});

app.post("/users", (req: Request, res: Response) => {
    let user = req.body;
    user.id = ++id;
    usuarios.push(user);
    res.send({
        message: "Usuário criado com sucesso!"
    });
});

app.put("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = usuarios.findIndex((_user: User) => _user.id === userId);
    usuarios[indexOf].nome = user.nome;
    usuarios[indexOf].email = user.email;
    res.send({
        message: "Usuário alterado com sucesso!"
    });
});

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});