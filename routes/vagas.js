//Declarar variável express
const express = require('express');

const router = express.Router();

//RETORNA TODAS AS VAGAS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'lista de todas as vagas'
    });
});

//INSERE UMA VAGA
router.post('/', (req, res, next) => {
    const vaga = {
        titulo: req.body.titulo,
        empresa: req.body.empresa,
        nivel: req.body.nivel,
        salario: req.body.salario,
        descricao: req.body.descricao,
        modalidade: req.body.modalidade,
        tags:req.body.tags
    }
    res.status(200).send({
        vagaCriada: vaga,
        mensagem: 'vaga inserida com sucesso!'       
    });
});

//RETORNA OS DADOS DE UMA VAGA
router.get('/:id_vaga',(req, res, next) =>{

    const id = req.params.id_vaga

    if (id === 'especial'){
        res.status(200).send({
            mensagem: 'Você esta usando o GET para uma vaga especial',
            id: id
        });
    }else{
        res.status(200).send({
            //mensagem: 'Você passou uma ID',
            id: id
        });
    }
});

//ALTERA UMA VAGA
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'vaga alterada com sucesso!'
    });
});

//EXCLUI UMA VAGA
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'vagas excluida com sucesso!'
    });
});

module.exports = router;
