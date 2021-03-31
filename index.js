const express = require('express');
const app = express();

// console.log(app);
//criando uma rota o 1° parametro é o endereço
app.get('/', (request, response) => {
    response.send('Olá, Mundo!');
})

app.listen(3000, () => {
    console.log('Servidor rodando!');
})