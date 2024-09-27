const Papel = require("./Papel");

class usuarios {
    construtor(nome, email, imagem, papel){ 
      this.nome = nome;
      this.email = email;
      this.imagem = imagem;

       if (!Object.values(Papel).includes(Papel)) {
        throw new Error(`Papel invalido: ${papel}`)
       } 

      this.papel = papel;
    }

    pegarPapel() {}; 

    encontrarTodos() {};

    buscarPeloId(id) {};

    adicionar() {};

    atualizar(id, corpoAtualizado)  {};

    excluir(id) {};
}
module.exports = usuarios;