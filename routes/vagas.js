//Declarar variável express
const express = require('express');

const router = express.Router();

const mysql = require('../mysql').pool;

//RETORNA TODAS AS VAGAS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'lista de todas as vagas'
    });
});

//INSERE UMA VAGA
router.post('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO vagas (titulo, empresa, nivel, salario, descricao, modalidade, tags) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [req.body.titulo, req.body.empresa, req.body.nivel, req.body.salario, re.body.descricao, req.body.modalidade, req.body.tags],

            (error, resultado, field) => {
                conn.release(); //nunca esquecer de liberar o pool

                if (error){
                    res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(200).send({
                    mensagem: 'vaga inserida com sucesso!',
                    id_vaga: resultado.insertId
                });
            }
        )
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
