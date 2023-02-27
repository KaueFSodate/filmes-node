const conexao = require('../DB/conexao')
const usuarios = require('../model/usuario')

module.exports = class usuarioControl {

    static telaCadastro(req, res){
        res.render('cadastro');
    }


    static cadastrar(req, res){

        // Criação do objeto
        const usuario = new usuarios(); 
        
        // Objeto recebendo o valor dos inputs
        usuario.setNome(req.body.nome);
        usuario.setSenha(req.body.senha);

        const sql = `INSERT INTO usuarios(nome, senha) VALUES (?,?)`
        const data = [usuario.getNome(), usuario.getSenha()]


        conexao.query(sql, data, (error) => { // Injetando a query no BD
            if(error){
                console.log(error);
            }
    
            res.redirect('/login'); // Redirecionar para a tela de lojin
        });


    }

    static telaLogin(req, res){
        res.render('login');
    }

    static acessar(req, res){

        // Criação do objeto
        const usuario = new usuarios(); 
        
        // Objeto recebendo o valor dos inputs
        usuario.setNome(req.body.nome);
        usuario.setSenha(req.body.senha);


        const sql = `SELECT nome, senha FROM usuarios WHERE nome = '${usuario.getNome()}' AND senha = '${usuario.getSenha()}'`

        conexao.query(sql, (error, data) => { // Injetando a query no BD
            if(error){
                console.log(error);
                return;
            }
    
            const usuario = data[0];
        
            if(usuario){    // Se tiver valor no select ira entrar na tela de livros
                res.redirect('/filmes');
            }else{
                res.redirect('/login');
            }
        });
    }
}