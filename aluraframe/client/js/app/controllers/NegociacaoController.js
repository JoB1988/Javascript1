class NegociacaoController {
  constructor() {
    var $ = document.querySelector.bind(document);
    this._inputDate = $("#data");
    this._inputQtd = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new Bind(
      new ListaNegociacao(),
      new NegociacaoView($("#negociacaoView")),
      "adiciona",
      "esvazia"
    );
    // template será renderizado na div que tem o #negociacaoView
    this._mensagem = new Bind(
      new Toast(),
      new ToastView($("#toastView")),
      "message"
    );
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
    let service = new ProdutoService();
    let negociacao = {
      data: this._criaNegociacao().data,
      quantidade: this._criaNegociacao().quantidade,
      valor: this._criaNegociacao().valor
    }; 
    service.saveNew(negociacao).then(value => {
      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._resetForm();
      // this._mensagem.message = `${value} com sucesso!`;
    }).catch(error => this._mensagem.message = error);
  }

  apaga() {
    this._listaNegociacoes.esvazia(this._negociacaoView);
    this._mensagem.message = "Lista removida com sucesso!";
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputDate.value),
      this._inputQtd.value,
      this._inputValor.value
    );
  }

  _resetForm() {
    // reset do form
    this._inputDate.value = "";
    this._inputDate.focus();
    this._inputQtd.value = 1;
    // focus no input almejado
    this._inputValor.value = 0;
  }

  import() {
    let service = new ProdutoService();
    Promise.all([
      service.obeterNegociacaoDaSemana(),
      service.obeterNegociacaoDaSemanaPassada(),
      service.obeterNegociacaoDaSemanaRetrasada()
    ])
      .then(response => {
        // A resposta veio 1 array com 3 arrays dentro. O método reduce, ele vai reduzir esses 3 array em um só.
        // Para cada item do array(prevArray), ou seja, para cada array dentro do array,
        // o método vai no novo array (newArray) e concatena um valor vazio com um
        // elemento do array antigo. No caso, um array que estava dentro dele
        // depois que finaliza o método, ele devolve um novo array, então é feito um forEach para adicionar na table
        response
          .reduce((newArray, prevArray) => newArray.concat(prevArray, []))
          .sort((a, b) => a.valor - b.valor)
          .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        this._mensagem.text = "Negociações importadas com sucesso!";
      })
      .catch(error => (this._mensagem.text = error));
  }
}
