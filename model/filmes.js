class filmes {

    constructor(idfilmes, nome, categoria, avaliacao){
        this.idfilmes = idfilmes;
        this.nome = nome;
        this.categoria = categoria;
        this.avaliacao = avaliacao;
    }

    getIdfilmes() {
        return this.idfilmes;
    }

    setIdfilmes(idfilmes){
        this.idfilmes = idfilmes;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria){
        this.categoria = categoria;
    }

    getAvaliacao() {
        return this.avaliacao;
    }

    setAvaliacao(avaliacao){
        this.avaliacao = avaliacao;
    }

}

module.exports = filmes;