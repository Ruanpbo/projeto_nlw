import express, { request } from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * PATCH = Alterar uma informação especifica
 */

app.get("/", (request, response) =>{
    return response.json({
        message: "Olá nlw - 05"
    });
})

app.post("/", (request, response) =>{
    return response.json({
        message: "Usuário salvo com sucesso!"
    });
})

app.listen(3333, () => console.log("server is runnin on port 3333"));