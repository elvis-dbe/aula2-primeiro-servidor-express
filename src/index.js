const express = require('express'); //importar a biblioteca para o meu projeto

const app = express(); //faz a instancia da biblioteca express para o projeto

app.get('/home', (requisicao, resposta) => {
    resposta.send("Olá mundo, esse é o meu primeiro servidor utilizando express.");
});

app.get('/', (requisicao, resposta) => {
    resposta.send("Essa é a minha rota principal.");
});

//EXERCICIO RESOLVIDO: Crie um servidor que ao ser acessado pela url: http://localhost:3000/usuarios 
//retorne na tela a listagem que está no array abaixo

const usuarios = [
    { id: 1, nome: "Elvis", idade: 27 },
    { id: 23, nome: "Ana", idade: 14 },
    { id: 312, nome: "Leilane", idade: 23 },
    { id: 4, nome: "Carlos", idade: 21 },
    { id: 123, nome: "Gustavo", idade: 16 }
]

app.get('/usuarios', (requisicao, resposta) => {
    resposta.send(usuarios);
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000.");
});