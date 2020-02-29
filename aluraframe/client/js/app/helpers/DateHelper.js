class DateHelper {

    static textoParaData(texto) {
        // regex que valida se a data é nesse formato -> yyyy-MM-dd
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error('Deve estar no formato ano-mes-dia');
        }
        // faz a data ficar no formato correto
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }

}