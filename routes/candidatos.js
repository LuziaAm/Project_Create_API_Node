//Declarar variável express
const express = require('express');

const router = express.Router();

//RETORNA TODAS OS CANDIDATOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'lista de todos os candidatos'
    });
});

//INSERE UM CANDIDATO
router.post('/', (req, res, next) => {
    const candidato ={
        nome: req.body.nome,
        contato: req.body.contato,
        email: req.body.email,
        experiencia: req.body.experiencia,
        habilidades: req.body.habilidades,
        escolaridade: req.body.escolaridade,
        adicionais: req.body.adicionais
    }
    res.status(200).send({
        candidatoCriado: candidato,
        mensagem: 'candidato criado com sucesso!'
    });
});

//RETORNA OS DADOS DE UM CANDIDATO
router.get('/:id_candidato',(req, res, next) =>{

    const id = req.params.id_candidato

    if (id === 'especial'){
        res.status(200).send({
            //mensagem: 'Retrna um candidato especial',
            id: id
        });
    }else{
        res.status(200).send({
            //mensagem: 'Retorna qualquer ID'
            id: id
        });
    }
})  

//ALTERA UM CANDIDATO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'candidato alterado com sucesso!'
    });
});

//EXCLUI UM CANDIDATO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'candidato excluído com sucesso!'
    });
});

module.exports = router;
