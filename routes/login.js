const express = require('express');
const router = express.Router();
const usuarioControl = require('../controller/usuarioController')


router.get('/', usuarioControl.telaLogin)

router.post('/acessar', usuarioControl.acessar)


module.exports = router;