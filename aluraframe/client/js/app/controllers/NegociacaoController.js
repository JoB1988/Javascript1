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
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.message = "Negociação adicionado com sucesso!";
    this._resetForm();
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
    let service = new ImportService();
    service.obeterNegociacaoDaSemana((error, response) => {
      if (error) {
        this._mensagem.text = error;
        return;
      }
      response.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
      this._mensagem.text = "Negociações importadas com sucesso!";
    });
  }
}
