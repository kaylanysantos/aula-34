const canal = require("./Canal");

class inscrito extends canal {
    constructor ( nome, email, imagem, papel){
        super(nome, email, imagem, papel);
        this.canal.inscrito
    }
    inscreverSeNoCanal(id) {};
}

module.exports = inscrito;