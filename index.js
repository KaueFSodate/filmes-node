const express = require('express');
const handlebars = require('express-handlebars');
const cadastro = require('./routes/cadastrar')
const acessar = require('./routes/login')
const filmes = require('./routes/cadastrarFilme')
const editarFilmes = require('./routes/editarFilme')
const port = 8080;
const app = express();

// Configuração para acessar o handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(express.static('public')); // Linkar o css

// Pegar as informações do body
app.use(express.urlencoded({
    extended: true

    })
)

app.use('/cadastrar', cadastro);

app.use('/login', acessar);

app.use('/filmes', filmes)

app.use('/editarFilme', editarFilmes)




app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`)
})
