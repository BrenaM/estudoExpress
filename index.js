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
    const {id} = request.params; //aqui pegamos nosso ID
    const {title, owner} = request.body; //retornando uma nova informação

    //aqui usamos o findIndex para percorre todo o array atrás do id
    //findIndex vai percorrer todos os projetos, e toda vez que ele percorrer na variável project
    //caso ela foe encontrada e retornar true, ela vai me retornar o id que estou passando
    //(projects=> project.id === id)
    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0 ){
        return response.status(400).json({ erro:'Projeto não encontrado' });
    }

    //agora que eu tenho o indice vou criar uma nova informação do projeto
    const project = {
        id,
        title,
        owner,
    }

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0){
        return response.status(400).json({erro: 'Projeto não foi encontrado'});
    }
    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

app.listen(3333);

//app.post()
// app.listen(3000, () => {
//     console.log('Servidor rodando!');
// })