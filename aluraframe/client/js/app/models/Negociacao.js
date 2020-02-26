class Negociacao {
    constructor(data, quantidade, valor) {
        // passa um valor para o objeto data que é um número que não pode ser setado posteriormente
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        // Congela o objeto: não deixa fazer alteração
        Object.freeze(this);
    }
    // mesmo que getVolume()
    get volume() {
        return this._valor * this._quantidade;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}