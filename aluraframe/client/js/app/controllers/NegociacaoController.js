class NegociacaoController {

    constructor() {

        var $ = document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQtd = $('#quantidade')
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacao();

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
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._resetForm();
    }

    _criaNegociacao() {
        return new Negociacao(DateHelper.textoParaData(this._inputDate.value), this._inputQtd.value, this._inputValor.value);
    }
    _resetForm() {
        // reset do form
        this._inputDate.value = '';
        this._inputDate.focus();
        this._inputQtd.value = 1;
        // focus no input almejado
        this._inputValor.value = 0;
    }
}