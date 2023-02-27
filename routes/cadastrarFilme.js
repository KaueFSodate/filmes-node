const express = require('express')
const router = express.Router()

const filmecontrol = require('../controller/filmesController')

router.get('/', filmecontrol.telaFilmes)

router.post('/cadastrarFilme', filmecontrol.cadastrarFilmes)

// Deletar o livro
router.get('/deletar/:idfilmes', filmecontrol.deletar)

module.exports = router;