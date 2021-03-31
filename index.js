const express = require('express');
const app = express();
const { v4:uuidv4 } = require('uuid');

app.use(express.json());

const projects = [];

/**
 * -- Parâmetros --
 * Query Params: funciona dentro do GET. Vamos usar principalmente para filtros e 
 *                  paginação;
 * Route Params: Identificar recursos na hr de atualizar ou deletar(). 
 * Request Body: Traz todo o conteudo da aplicação. o resto do conteudo na hr de 
 *                  criar ou editar um recurso
 * 
 */

 app.get('/projects', (request, response) => {
    /*const query = request.query; 
    trocamos o comando assima por uma versão desestruturada.
    Trazendo tudo que tem dentro do query de forma separada {title, owner}
    *///const {title, owner} = request.query;

    return response.json(projects);
});

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;

    const project = { id: uuidv4(), title, owner};

    projects.push(project); //esse push vai jogar a criação do nosso projeto para o nosso array

    return response.json(project); //sempre retorna o projeto recem criado e nunca exibir a lista inteira 
});

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params);

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