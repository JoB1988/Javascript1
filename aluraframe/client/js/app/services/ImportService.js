class ImportService {
  constructor() {
}

obeterNegociacaoDaSemana(callback) {
    let AJAX = new XMLHttpRequest();
    // Requisição AJAX
    AJAX.open("GET", `http://localhost:3000/negociacoes/semana`);
    AJAX.onreadystatechange = () => {
      if (AJAX.readyState == 4) {
        if (AJAX.status == 200) {
            callback(undefined, JSON.parse(AJAX.responseText).map(
            objeto => new Negociacao(
                new Date(objeto.data),
                objeto.quantidade,
                objeto.valor
              )
          ));
        } else {
            callback('Não foi possível obter as negociações', undefined);
        }
      }
    };
    AJAX.send();
  }
}
