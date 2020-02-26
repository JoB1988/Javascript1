var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

var tbody = document.querySelector('table tbody');

// Ao clicar em submit, esse método abaixo será implementado
document.querySelector('.form').addEventListener('submit', function(event) {
    // evita que o navegador seja carregado
    event.preventDefault();
    // cria uma variável de linha de tabela
    var tr = document.createElement('tr');
    // para cada item no array de campos
    campos.forEach(function(campo){
        // cria uma lacuna
        var td = document.createElement('td');
        // dá um valor à lacuna criada
        td.textContent = campo.value;
        // adiciona a lacuna à linha
        tr.appendChild(td)
    });
    //  uma variável de lacuna 
    var tdVolume = document.createElement('td');
    // a variavel recebe o valor
    tdVolume.textContent = campos[1].value * campos[2].value;
    // a variável é adicionada à linha
    tr.appendChild(tdVolume);
    // a linha é adicionada ao corpo da tabela
    tbody.appendChild(tr);

    // reset do form
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    // focus no input almejado
    campos[0].focus();
});
