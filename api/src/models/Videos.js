const gerarIdUnico = require("../utils/geraridunico");
const { videos } = require("../mock/dados.json")

class video {
    consttrutor(id,titulo,descricao,imagem, canaLID){
      this.id = gerarIdUnico (videos);  
      this.quantidadeViwes = 0;
      this.titulo = titulo;
      this.descricao = descricao;
      this.imagem = imagem;
      this.canalID = canaLID;
    }
    encontrarTodos() {};

    buscarPeloId(id) {};

    adicionar() {};

    atualizar(id, corpoAtualizado)  {};

    excluir(id) {};
}
module.exports = video;