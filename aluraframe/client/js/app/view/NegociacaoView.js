class NegociacaoView extends View {

    constructor(elemento) {
        super(elemento);
    }

    _template(modelo) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${modelo.negociacoes.map(n => `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <td colspan='3'>Volume Total</td>
                <td>${modelo.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                </td>
            </tfoot>
        </table>
        `;
    }
}
// método map() é iterativo (usado como foreach), então para cada item n do array, ele retorna algo.
// método join('') ele junta a string usando o que há dentro das aspas simples

// método reduce(), ele é iterativo (usado como foreach), na qual vemos 2 variáveis,
// uma que é a total, que é o valor acumulado que vai receber o n.volume,
// após a vírgula, é o valor inicial da variavel total. No fim ele retorna o volume