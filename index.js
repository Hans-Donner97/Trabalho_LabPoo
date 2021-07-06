const { request, response } = require('express');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (request, response) =>{
    return response.json({
        nome: "Hans Donner",
        profissão: "Suporte"
    });

});

app.listen(3333);
