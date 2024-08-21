import express, {Request, Response} from "express";

export const userRoutes = express.Router();

type User = {
    id: number; 
    nome: string;
    email: string;
};
let id = 0;
let usuarios: User[] = [];

userRoutes.get("/users", (req: Request, res: Response) => {
    res.send(usuarios);
});

userRoutes.get("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let user = usuarios.find(user => user.id === userId);
    res.send(user);
});

userRoutes.post("/users", (req: Request, res: Response) => {
    let user = req.body;
    user.id = ++id;
    usuarios.push(user);
    res.send({
        message: "Usuário criado com sucesso!"
    });
});

userRoutes.put("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = usuarios.findIndex((_user: User) => _user.id === userId);
    usuarios[indexOf].nome = user.nome;
    usuarios[indexOf].email = user.email;
    res.send({
        message: "Usuário alterado com sucesso!"
    });
});

userRoutes.delete("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let indexOf = usuarios.findIndex((user: User) => user.id === userId);
    usuarios.splice(indexOf, 1);
    res.send({
        message: "Usuário excluído com sucesso!"
    })
});