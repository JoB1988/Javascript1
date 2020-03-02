class ListaNegociacao {
    
    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        // this quer dizer que passa esse objeto inteiro que tá no constructor
        this._armadilha(this);
    }
    
    get negociacoes() {
        // retorna uma cópia de uma lista. Evita que um objeto indevido seja adicionado por outras vias
        return [].concat(this._negociacoes);
    }
    
    esvazia() {
        this._negociacoes = [];
        this._armadilha(this);
    }

}