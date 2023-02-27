const express = require('express');
const router = express.Router();
const conexao = require('../DB/conexao');
const filmeControl = require('../controller/filmesController')


// Mostrar o livro que será editado
router.get('/:idfilmes', filmeControl.telaEditar)

// Editar o livro
router.post('/', filmeControl.editarFilme)

module.exports = router;