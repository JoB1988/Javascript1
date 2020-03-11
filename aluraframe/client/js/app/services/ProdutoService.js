const URL = `http://localhost:3000`;
class ProdutoService {
  constructor() {
    this._service = new HttpService();
  }

  obeterNegociacaoDaSemana() {
    return new Promise((resolve, reject) => {
      this._service
        .get(`${URL}/negociacoes/semana`, `Não foi possível obter as negociações dessa semana.`)
        .then(arrayNegociacao => {
          resolve(
            arrayNegociacao.map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        })
        .catch(error => reject(error));
    });
  }
  obeterNegociacaoDaSemanaPassada() {
    return new Promise((resolve, reject) => {
      this._service
        .get(`${URL}/negociacoes/anterior`, `Não foi possível obter as negociações da semana passada.`)
        .then(arrayNegociacao => {
          resolve(
            arrayNegociacao.map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        })
        .catch(error => reject(error));
    });
  }
  obeterNegociacaoDaSemanaRetrasada() {
    return new Promise((resolve, reject) => {
      this._service
        .get(`${URL}/negociacoes/retrasada`, `Não foi possível obter as negociações da semana retrasada.`)
        .then(arrayNegociacao => {
          resolve(
            arrayNegociacao.map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        })
        .catch(error => reject(error));
    });
  }
  saveNew(data) {
    return new Promise((resolve, reject) => {
      this._service
        .save(`${URL}/negociacoes`, data, `Não foi possível obter as negociações dessa semana.`)
        .then(value => resolve(value)).catch(error => reject(error));
    });
  }

}
