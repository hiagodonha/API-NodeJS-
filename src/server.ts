import expresss, { response } from "express";

const app = expresss();


app.post("/users", (request, response) => {
    return response.json({
        message: "Usuário cadastrado com sucesso !"
    });
})

app.get("/", (request, response) => {
    return response.json({
        message: "Olá Mundo !"
    });
});

app.listen(3333, () => console.log("Listening port 3333"));