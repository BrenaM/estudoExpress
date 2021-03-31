const { request, response } = require('express');
const express = require('express');
const app = express();
// console.log(app);

/**
 * Get: buscar informações do back-end
 * Post: criar informções no back-end
 * Put/PATCH: Alterar uma informação no back-end
 * Delete: Deletar informações do back-end
 */

//criando uma rota o 1° parametro é o endereço
app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 100'
    ]);
})

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ]); 
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 56',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 56',
        'Projeto 2'
        
    ]);
});

app.listen(3333);

//app.post()
// app.listen(3000, () => {
//     console.log('Servidor rodando!');
// })