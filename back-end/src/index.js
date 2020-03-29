const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);



/* Rota / Recurso   */

/*
    Metodos HTTP
    GET: Buscar uma informação no backend
    POST: Criar uma informação no backend
    PUT: Alterar uma informação no backend
    DELETE: Deletar uma informação no backend
*/

/* tipos de parametros
    Query Params: Parametros nomeados enviados na rota após o simbolo
    de interrogacao e geralmente eles servem para filtros
    paginacao
    Route Params: Parametros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

*/

/*
Driver: select * from users
Query Builder: table('users).select('*').where()
*/




