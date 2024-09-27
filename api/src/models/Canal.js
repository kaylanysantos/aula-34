const usuarios = require("./usuarios");

class canal extends usuarios{
   constructor(nome, email, imagem, Papel){
     super(nome, email, imagem, Papel)
     this.videos =  [];
     this.inscrito = [];
   }
   PostarUsuarioDono() {}

   PostarVideo() {}

}

module.exports = canal;