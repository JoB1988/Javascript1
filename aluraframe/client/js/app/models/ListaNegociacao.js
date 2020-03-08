class ListaNegociacao {
    
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    
    get negociacoes() {
        // retorna uma cópia de uma lista. Evita que um objeto indevido seja adicionado por outras vias
        return [].concat(this._negociacoes);
    }
    
    esvazia() {
        this._negociacoes = [];
    }

}