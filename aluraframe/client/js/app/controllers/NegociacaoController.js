class NegociacaoController {

    constructor() {

        var $ = document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQtd = $('#quantidade')
        this._inputValor = $('#valor');

    }

    get data() {
        return this._inputDate;
    }

    get quantidade() {
        return this._inputQtd;
    }

    get valor() {
        return this._inputValor;
    }

    get volume() {
        return this._inputQtd * this._inputValor;
    }

    adiciona(event) {
        event.preventDefault();
        // let date = new Date(this._inputDate.value)
        let date = new Date(...this._inputDate.value.split('-').map((item, indice) => item - indice % 2))
        let negociacao = new Negociacao(date, this._inputQtd.value, this._inputValor.value);
        console.log(negociacao);
    }
}