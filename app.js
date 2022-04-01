//Pegar o express
const express = require('express');

//pegar o app e criar uma instância do express
const app = express();

//Morgan exibe log
const morgan = require('morgan');

//Referência rota
const rotasVagas =  require('./routes/vagas');
const rotasCandidatos =  require('./routes/candidatos');

app.use(morgan('dev'));
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