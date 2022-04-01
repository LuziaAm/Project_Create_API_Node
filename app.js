//Pegar o express
const express = require('express');

//pegar o app e criar uma instância do express
const app = express();

//Morgan exibe log
const morgan = require('morgan');

//Chamar body-parser
const  bodyParser = require('body-parser');

//Referência rota
const rotasVagas =  require('./routes/vagas');
const rotasCandidatos =  require('./routes/candidatos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); //apenas dados simples
app.use(bodyParser.json());//Só aceita JSON no Body de entrada

//TRATAMENTO DE CORS
app.use((req,res, next) => {
    res.header('Access-Control-Allow-Oring', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, x-Requrested-with, Content-TypeError, Accept, Authorization'
    );
    //Importante ser implementado
    if(req.method ==='OPTIONS'){
        res.header('Access-Control-Allow-methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

app.use('/vagas', rotasVagas);
app.use('/candidatos', rotasCandidatos);

//Quando não encontra rota
app.use((req, res, next) => {
    const erro = new Error('Rota não encontada!');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem: error.message
        }
    });
});


//Expostar
module.exports = app;