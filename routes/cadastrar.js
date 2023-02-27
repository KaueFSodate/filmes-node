const express = require('express');
const router = express.Router();
const usuarioControl = require('../controller/usuarioController')


router.get('/', usuarioControl.telaCadastro)

router.post('/usuarios', usuarioControl.cadastrar)


module.exports = router;