const conexao = require('../DB/conexao')
const filmes = require('../model/filmes')

module.exports = class filmeControl {

    static telaFilmes(req, res){

        const sql = `SELECT *FROM filmes`;

        conexao.query(sql, (error, data) => { // Injetando a query no BD
            if(error){
                console.log(error);
            }
    
            const filmes = data;
            res.render('filmes', {filmes})

        });
    }

    static cadastrarFilmes(req, res){


        // Criação do objeto
        const filme = new filmes(); 
        
        // Objeto recebendo o valor dos inputs
        filme.setNome(req.body.nome);
        filme.setCategoria(req.body.categoria);
        filme.setAvaliacao(req.body.avaliação);

        const sql = `insert into filmes(nome, categoria, avaliacao) VALUES('${filme.getNome()}','${filme.getCategoria()}', '${filme.getAvaliacao()}')`;

        conexao.query(sql, (error, data) => { // Injetando a query no BD
            if(error){
                console.log(error);
            }
    
            const filmes = data;
            res.render('filmes', {filmes})
            res.redirect('/filmes')

        });
    }

    static deletar(req, res){
        const filme = new filmes(); 
        
        // Objeto recebendo o valor dos inputs
        filme.setIdfilmes(req.params.idfilmes);

        const sql = `DELETE FROM filmes WHERE (idfilmes = ${filme.getIdfilmes()});`;
        

        conexao.query(sql, (error, data) => { // Injetando a query no BD
            if(error){
                console.log(error);
            }
    
            const filmes = data;
            res.render('filmes', {filmes})
            res.redirect('/filmes')

        });
    }

    static telaEditar(req, res){
        const idfilmes = req.params.idfilmes;

        // String do select
        const sql = `SELECT *FROM filmes where idfilmes =${idfilmes}`

        conexao.query(sql, (error, data) => { // data é os dados do SELECT

            if(error){ // Se retornar erro
                console.log(error);
                return;
            }

            const filmes = data[0]; // Armazena o valor do select na variavel livros

            res.render('editarFilmes', {filmes}); // Renderizar o form editar com o argumento editar e passar para o form editar.handlebars

        });
    }

    static editarFilme(req, res){

        // Variaveis que irão receber o valor dos inputs
        const id = req.body.idfilmes
        const nome = req.body.nome
        const categoria = req.body.categoria
        const avaliacao = req.body.avaliação

        // String SQL
        const sql = `update filmes set nome = '${nome}', categoria ='${categoria}', avaliacao ='${avaliacao}' where idfilmes = '${id}'`

        conexao.query(sql, (error) => {
            if(error){
                console.log(error);
            }

            res.redirect('/filmes');
        });

    }

}