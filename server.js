//Importando para o projeto o HTTP
const http = require('http');

//Importar pra dentro Server
const app = require('./app');

//Variável pra armazenar porta para o Serviço
const port = process.env.PORT || 4505; //se a variável não estiver sido fornecida vai para o padrão 3000

//Criar o Server e passando o app
const server = http.createServer(app);

server.listen(port); //localhost:4707

//Intalar nodemon para atualizar sem derrubar o servidor: npm install --save-dev nodemon


